interface ParkingLot {
    parkCar: (size: CarSize, licensePlate: string) => boolean
    unparkCar: (licensePlate: string) => void
    addParkingSpot: (size: CarSize) => void;
 
    availableSmallSpots: ParkingSpot[];
    availableMediumSpots: ParkingSpot[];
    availableLargeSpots: ParkingSpot[];
    licenseToParkingSpot: {liscense: string, parkingSpot: ParkingSpot};

}

interface ParkingSpot {
    size: CarSize
    licensePlate: string;
}

enum CarSize {
    Small = 1,
    Medium = 2,
    Large = 3 
}


class ParkingLotService implements ParkingLot {
    availableSmallSpots;
    availableMediumSpots;
    availableLargeSpots;
    licenseToParkingSpot;

    constructor(){
        this.availableLargeSpots = []
        this.availableMediumSpots = []
        this.availableSmallSpots = []
        this.licenseToParkingSpot = {}
    }


    parkCar =  (size: CarSize, licensePlate: string): boolean => {
        let foundParkingSpot
        if(size === CarSize.Small){
            const parkingSpot = this.getSmallSpot()
            if(parkingSpot){
                foundParkingSpot = parkingSpot

            }
        }
        if(!foundParkingSpot && (size === CarSize.Small || size === CarSize.Medium)){
            const parkingSpot = this.getMediumSpot()
            if(parkingSpot){
                foundParkingSpot = parkingSpot

            }
        }
        if(!foundParkingSpot && size === CarSize.Large){
            const parkingSpot = this.getLargeSpot()
            if(parkingSpot){
                foundParkingSpot = parkingSpot
            }
        }
        if(foundParkingSpot){
            foundParkingSpot.parkCar(licensePlate)
            this.licenseToParkingSpot[licensePlate] = foundParkingSpot
            return true
        }
        return false
    }

    unparkCar = (licensePlate: string) => {
        const parkingSpot = this.
    }

    addParkingSpot =  (size: CarSize) => {
        const parkingSpot = new ParkingSpotService(size)

        if(size === CarSize.Large){
            this.availableLargeSpots.push(parkingSpot)
        }
        if(size === CarSize.Medium){
            this.availableMediumSpots.push(parkingSpot)
        }
        if(size === CarSize.Small){
            this.availableSmallSpots.push(parkingSpot)
        }
    }

    getLargeSpot = () =>{
        if(this.availableLargeSpots.length > 0){
            return this.availableLargeSpots.pop()
        }

        return null
    }

    getMediumSpot = () =>{
        if(this.availableMediumSpots.length > 0){
            return this.availableMediumSpots.pop()
        }

        return null
    }

    getSmallSpot = (): ParkingSpot | null =>{
        if(this.availableSmallSpots.length > 0){
            return this.availableSmallSpots.pop()
        }

        return null
    }
}


class ParkingSpotService implements ParkingSpot {
    size;
    licensePlate;


    constructor(carSize: CarSize){
        this.size = carSize
        this.licensePlate = ""
    }

    parkCar = (licensePlate: string) =>{
        this.licensePlate = licensePlate;
    }

    unParkCar = () =>{
        this.licensePlate = ""
    }
}