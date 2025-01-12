type FloorToRequest = {
  [key: number]: ElevatorRequest[];
};

interface Elevator {
  currentFloor: number;
  destinationFloor: number | null;
  handleRequests: () => void;
  addRequest: (req: ElevatorRequest) => void;

  requestQueue: ElevatorRequest[];
  originFloorToRequestOffElevator: FloorToRequest;
  destinationFloorToRequestOnElevator: FloorToRequest;
}

interface ElevatorRequest {
  origin: number;
  destination: number;
  fullfilled: boolean;

  fullfill: () => void;
  toString: () => string;
}

class ElevatorRequestService implements ElevatorRequest {
  origin: number;
  destination: number;
  fullfilled: boolean;

  constructor(origin: number, destination: number) {
    this.origin = origin;
    this.destination = destination;
    this.fullfilled = false;
  }

  fullfill = () => (this.fullfilled = true);

  toString = (): string => {
    return `-origin-${this.origin}-destination-${this.destination}-`;
  };
}

class ElevatorService implements Elevator {
  currentFloor: number;
  destinationFloor: number | null;
  requestQueue: ElevatorRequest[] = [];
  originFloorToRequestOffElevator: FloorToRequest = {};
  destinationFloorToRequestOnElevator: FloorToRequest = {};

  constructor() {
    this.currentFloor = 0;
    this.destinationFloor = null;
  }

  addRequest = (request: ElevatorRequest) => {
    const floor = request.origin;
    if (!this.originFloorToRequestOffElevator[floor])
      this.originFloorToRequestOffElevator[floor] = [];
    this.originFloorToRequestOffElevator[floor].push(request);
    this.requestQueue.push(request);
  };

  addRequests = (requests: ElevatorRequest[]) => {
    requests.forEach((request) => {
      this.addRequest(request);
    });
  };

  handleRequests = () => {
    while (this.hasRequests()) {
      const requestsToFullfill: ElevatorRequest[] =
        this.destinationFloorToRequestOnElevator[this.currentFloor];

      if (requestsToFullfill && requestsToFullfill.length > 0) {
        requestsToFullfill.forEach((request) => {
          request.fullfill();
        });
      }

      delete this.destinationFloorToRequestOnElevator[this.currentFloor];

      if (
        this.originFloorToRequestOffElevator[this.currentFloor] &&
        this.originFloorToRequestOffElevator[this.currentFloor].length > 0
      ) {
        this.originFloorToRequestOffElevator[this.currentFloor].forEach(
          (request) => {
            const destination = request.destination;
            if (!this.destinationFloorToRequestOnElevator[destination])
              this.destinationFloorToRequestOnElevator[destination] = [];
            this.destinationFloorToRequestOnElevator[destination].push(request);
          }
        );
        delete this.originFloorToRequestOffElevator[this.currentFloor];
      }

      if (this.destinationFloor === this.currentFloor) {
        this.destinationFloor = null;
      }

      if (!this.destinationFloor) {
        while (this.requestQueue.length > 0) {
          const request: ElevatorRequest | undefined =
            this.requestQueue.shift();
          if (request && !request.fullfilled) {
            const destination = request.destination;
            this.destinationFloor = destination;
            if (!this.destinationFloorToRequestOnElevator[destination]) {
              this.destinationFloorToRequestOnElevator[destination] = [];
            }
            this.destinationFloorToRequestOnElevator[destination].push(request);
            break;
          }
        }
        if(this.requestQueue.length === 0 && !this.destinationFloor){
          console.log("nothing in queue")
          const keys = Object.keys(this.destinationFloorToRequestOnElevator)
          if(keys.length > 0){
            const num: number = parseInt(keys[0])
            const requests: ElevatorRequest[] = this.destinationFloorToRequestOnElevator[num]
            if(requests.length > 0){
              const request : ElevatorRequest = requests[0]
              this.destinationFloor = request.destination
              requests.shift()
              if(requests.length === 0){
                delete this.destinationFloorToRequestOnElevator[num]
              }
            }
          }
        }
      }
      this.print();
      if (this.destinationFloor) {
        if (this.destinationFloor > this.currentFloor) {
          this.currentFloor++;
        } else if (this.destinationFloor < this.currentFloor) {
          this.currentFloor--;
        }
      }
    }
  };

  hasRequests = (): boolean => {
    return (
      Object.keys(this.destinationFloorToRequestOnElevator).length > 0 ||
      this.requestQueue.length > 0
    );
  };

  print = () => {
    console.log("floor", this.currentFloor);
    let str = "";
    console.log("requests on elevator");
    Object.keys(this.destinationFloorToRequestOnElevator).forEach((floor) => {
        const num = parseInt(floor)
      const requests = this.destinationFloorToRequestOnElevator[num];
      if (requests) {
        requests.forEach((request) => {
          str += request.toString();
        });
      }
    });
    console.log(str);
    console.log("requests off elevator");
    str = "";
    Object.keys(this.originFloorToRequestOffElevator).forEach((floor) => {
        const num = parseInt(floor)
      const requests = this.originFloorToRequestOffElevator[num];
      if (requests) {
        requests.forEach((request) => {
          str += request.toString();
        });
      }
    });
    console.log(str);
  };
}

const elevator = new ElevatorService();

const request = new ElevatorRequestService(1, 4);
elevator.addRequest(request);
const request2 = new ElevatorRequestService(2, 4);
elevator.addRequest(request2);
const request3 = new ElevatorRequestService(1, 5);
elevator.addRequest(request3);
// const request4 = new ElevatorRequestService(1, 4);
// elevator.addRequest(request4);
const request5 = new ElevatorRequestService(3, 8);
elevator.addRequest(request5);
const request6 = new ElevatorRequestService(8, 10);
elevator.addRequest(request6);
const request7 = new ElevatorRequestService(10, 0);
elevator.addRequest(request7);
const request8 = new ElevatorRequestService(6, 4);
elevator.addRequest(request8);

elevator.handleRequests();
