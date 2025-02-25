type FloorToRequest = {
  [key: number]: ElevatorRequest[];
};

interface Elevator {
  currentFloor: number;
  destinationFloor: number | null;
  queue: ElevatorRequest[];

  addRequest: (req: ElevatorRequest) => void;
  move: () => void;
}

interface ElevatorRequest {
  origin: number;
  destination: number;
  isOnElevator: boolean;

  toString: () => string;
}

class ElevatorRequestService implements ElevatorRequest {
  origin: number;
  destination: number;
  isOnElevator: boolean;

  constructor(origin: number, destination: number) {
    this.origin = origin;
    this.destination = destination;
    this.isOnElevator = false;
  }

  toString = (): string => {
    return `-origin-${this.origin}-destination-${this.destination}-`;
  };
}

class ElevatorService implements Elevator {
  currentFloor: number;
  destinationFloor: number | null;
  queue: ElevatorRequest[] = [];

  constructor() {
    this.currentFloor = 0;
    this.destinationFloor = null;
  }

  move = () => {
    this.print()
    if(this.queue.length === 0) return
    this.handleDropOffs()
    this.setDestinationFloor()
    this.handlePickups()

    if(this.destinationFloor !== null){
      const elevatorDirection = this.direction(this.currentFloor, this.destinationFloor)
      this.currentFloor += elevatorDirection
      this.move()
    }

  };

  handleDropOffs = () =>{
    this.queue = this.queue.filter(req => !(req.destination === this.currentFloor && req.isOnElevator))
  }
  handlePickups = () => {
    if(this.destinationFloor === null) return
    const elevatorDirection = this.direction(this.currentFloor, this.destinationFloor)
    this.queue.forEach(req =>{
      const requestDirection = this.direction(req.origin, req.destination)
      if(req.origin === this.currentFloor && requestDirection === elevatorDirection){
        req.isOnElevator = true;
      }
    })
  }

  setDestinationFloor = () => {
    if(this.destinationFloor !== null && this.destinationFloor !== this.currentFloor){
      return
    }
    const requestsOnElevator = this.queue.filter(req => req.isOnElevator)
    if(requestsOnElevator.length > 0){
      this.destinationFloor = requestsOnElevator[0].destination
      return
    }
    const requestsOffElevator = this.queue.filter(req => !req.isOnElevator)
    if(requestsOffElevator.length > 0) {
      const request = requestsOffElevator[0]
      this.currentFloor = request.origin
      this.destinationFloor = request.destination
    }

  }

  direction = (a: number, b: number): number => (b - a) / Math.abs(b - a);

  addRequest = (request: ElevatorRequest) => {
    this.queue.push(request);
  };

  print = () => {
    console.log(`current floor: ${this.currentFloor}, destination: ${this.destinationFloor}`)
    const requestsOnElevator = this.queue.filter(req => req.isOnElevator).map(req => req.toString())
    const requestsOffElevator = this.queue.filter(req => !req.isOnElevator).map(req => req.toString())
    console.log("on elevator")
    console.log(requestsOnElevator.join(" "))
    console.log("off elevator")
    console.log(requestsOffElevator.join(" "))
  };
}

const elevator = new ElevatorService();
const request1 = new ElevatorRequestService(1, 4)
elevator.addRequest(request1)
const request2 = new ElevatorRequestService(10, 0)
elevator.addRequest(request2)
const request3 = new ElevatorRequestService(2, 1)
elevator.addRequest(request3)
const request4 = new ElevatorRequestService(3, 6)
elevator.addRequest(request4)
const request5 = new ElevatorRequestService(8, 11)
elevator.addRequest(request5)

elevator.move()
