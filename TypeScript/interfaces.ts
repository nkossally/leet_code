interface Point {
    x: number;
    y: number;
  }
  
  interface SetPoint {
    (x: number, y: number): void;
  }

  type Pointy = {
    x: number;
    y: number;
  };
  

  // enums

  // class inheiritance

interface ValidDistributionCenterRequest {
    distributionCenterId: string;
    clusterIds: string;
    distance: number;
}


interface ValidDistributionCenterResponse {
    distributionCenter: string;
    distributionCenters: DistributionCenter[];
}

interface DistributionCenter {
    id: string;
    latitude: string;
    longitude: string;
}



class HandleRequest   {
    request: ValidDistributionCenterRequest;

    constructor(request: ValidDistributionCenterRequest){
        this.request = request
    }

    // this.getDistributionCentersInCluster 

    // filterByDistance
  



}