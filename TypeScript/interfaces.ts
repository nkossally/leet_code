interface GetDistributionCenterRequest {
    distributionCenterId: string;
    constraints: Constraints;
}

interface GetDistributionCenterResponse {
    distributionCenter: string;
    distributionCenters: DistributionCenter[];
}

interface DistributionCenter {
    id: string;
    latitude: string;
    longitude: string;
}

type Constraints = {
  distance: number | undefined;
  weather: string| undefined;
}

class DistributionCenterFinderService {

  
  
  getDistributionCenters = () => {

  }
}

class DataBaseInterface {
  
  getNearbyDistributionCenters = (request) =>{

  }

  getDistributionCenterBucketsFromCoordinates = (latitude, longitude) =>{

  }

  getDistributionCentersFromBucket = (bucketId) =>{

  }
}


class FilterDistribution   {

    filterDistributionCentersByWeather = (centers, weatherConstraint) => {

      
    }

}


/// service, request and response for each method, 3) database
// exceptional (invalid longitude)