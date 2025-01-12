type licenseToParkingSpot = {
  [key: string]: ParkingSpot;
};
interface ParkingLot {
  parkCar: (size: CarSize, licensePlate: string) => boolean;
  unparkCar: (licensePlate: string) => void;
  addParkingSpot: (size: CarSize) => void;

  availableSmallSpots: ParkingSpot[];
  availableMediumSpots: ParkingSpot[];
  availableLargeSpots: ParkingSpot[];
  licenseToParkingSpot: licenseToParkingSpot;
}

interface ParkingSpot {
  size: CarSize | undefined;
}

enum CarSize {
  Small = 1,
  Medium = 2,
  Large = 3,
}

class ParkingLotService implements ParkingLot {
  availableSmallSpots: ParkingSpot[] = [];
  availableMediumSpots: ParkingSpot[] = [];
  availableLargeSpots: ParkingSpot[] = [];
  licenseToParkingSpot: licenseToParkingSpot = {};

  constructor() {}

  parkCar = (size: CarSize, licensePlate: string): boolean => {
    if(this.licenseToParkingSpot[licensePlate] ){
      return false
    }

    if (size === CarSize.Small) {
      const parkingSpot = this.getSmallSpot();
      if (parkingSpot) {
        this.licenseToParkingSpot[licensePlate] = parkingSpot;
        return true;
      }
    }
    if (size === CarSize.Small || size === CarSize.Medium) {
      const parkingSpot = this.getMediumSpot();
      if (parkingSpot) {
        this.licenseToParkingSpot[licensePlate] = parkingSpot;
        return true;
      }
    }
    const parkingSpot = this.getLargeSpot();
    if (parkingSpot) {
      this.licenseToParkingSpot[licensePlate] = parkingSpot;
      return true;
    }

    console.log("can't park it bitch")

    return false;
  };

  unparkCar = (licensePlate: string) => {
    const parkingSpot: ParkingSpot | undefined =
      this.licenseToParkingSpot[licensePlate];
    if (parkingSpot) {
      const size = parkingSpot.size;
      delete this.licenseToParkingSpot[licensePlate];
      console.log("unparking", licensePlate, "size", size);
      if (size === CarSize.Large) {
        this.availableLargeSpots.push(parkingSpot);
        return true;
      } else if (size === CarSize.Medium) {
        this.availableMediumSpots.push(parkingSpot);
        return true;
      } else if (size === CarSize.Small) {
        this.availableSmallSpots.push(parkingSpot);
        return true;
      }
    }
    return false;
  };

  addParkingSpot = (size: CarSize) => {
    const parkingSpot: ParkingSpot = new ParkingSpotService(size);

    if (size === CarSize.Large) {
      this.availableLargeSpots.push(parkingSpot);
    }
    if (size === CarSize.Medium) {
      this.availableMediumSpots.push(parkingSpot);
    }
    if (size === CarSize.Small) {
      this.availableSmallSpots.push(parkingSpot);
    }
  };

  addParkingSpots = (size: CarSize, num: number) => {
    for (let i = 0; i < num; i++) {
      this.addParkingSpot(size);
    }
  };

  getLargeSpot = (): ParkingSpot | null => {
    if (this.availableLargeSpots.length > 0) {
      const parkingSpot =
        this.availableLargeSpots[this.availableLargeSpots.length - 1];
      this.availableLargeSpots.pop();
      return parkingSpot;
    }

    return null;
  };

  getMediumSpot = (): ParkingSpot | null => {
    if (this.availableMediumSpots.length > 0) {
      const parkingSpot =
        this.availableMediumSpots[this.availableMediumSpots.length - 1];
      this.availableMediumSpots.pop();
      return parkingSpot;
    }

    return null;
  };

  getSmallSpot = (): ParkingSpot | null => {
    if (this.availableSmallSpots.length > 0) {
      const parkingSpot =
        this.availableSmallSpots[this.availableSmallSpots.length - 1];
      this.availableSmallSpots.pop();
      return parkingSpot;
    }

    return null;
  };

  print = () => {
    console.log("large spots");
    let str = "";
    for (let i = 0; i < this.availableLargeSpots.length; i++) {
      const parkingSpot: ParkingSpot = this.availableLargeSpots[i];
      str += parkingSpot.toString();
    }
    console.log(str);
    console.log("medium spots");
    str = "";
    for (let i = 0; i < this.availableMediumSpots.length; i++) {
      const parkingSpot: ParkingSpot = this.availableMediumSpots[i];
      str += parkingSpot.toString();
    }
    console.log(str);
    console.log("small spots");
    str = "";
    for (let i = 0; i < this.availableSmallSpots.length; i++) {
      const parkingSpot: ParkingSpot = this.availableSmallSpots[i];
      str += parkingSpot.toString();
    }
    console.log(str);

    console.log("parked cars")
    Object.keys(this.licenseToParkingSpot).forEach((key) => {
      console.log(key, this.licenseToParkingSpot[key].toString());
    });
  };
}

class ParkingSpotService implements ParkingSpot {
  size;

  constructor(carSize: CarSize) {
    this.size = carSize;
  }

  toString = () => {
    return `-${this.size}-`;
  };
}

const parkingLot = new ParkingLotService();
parkingLot.addParkingSpots(CarSize.Small, 3);


parkingLot.parkCar(CarSize.Small, "nina");
parkingLot.print();
parkingLot.parkCar(CarSize.Small, "bonina");
parkingLot.print();
parkingLot.parkCar(CarSize.Small, "brown");
parkingLot.print();
parkingLot.parkCar(CarSize.Small, "cow");
parkingLot.print();
parkingLot.unparkCar( "bonina");
parkingLot.print();
parkingLot.parkCar(CarSize.Small, "cow");
parkingLot.print();