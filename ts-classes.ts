interface Vehicle {
  make: string;
  year: number;
  type?: string;
  go(): void;
}

class Car implements Vehicle {
  // make: string;
  // type: string = '';
  constructor(public make: string, public year: number) {
    this.make = make;
  }

  go():void {
    
  }
}