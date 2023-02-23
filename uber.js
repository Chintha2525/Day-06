class Uber {
    constructor(distance, time, surge = 1) 
    {
      this.distance = distance; 
      this.time = time; 
      this.surge = surge;
    }
  
    totalCost() 
    {
      const baseFare = 20;
      const costPerMile = 10;
      const costPerMinute = 1;
      const surge = this.surge;
  
      const fare = (baseFare + (costPerMile * this.distance) + (costPerMinute * this.time)) * surge;
  
      return fare;
    }
  }


const ride1 = new Uber(5, 15, 1);
const ride2 = new Uber(10, 30, 1.5); 

console.log(ride1.totalCost());                                  // 85
console.log(ride2.totalCost());                                  // 225
