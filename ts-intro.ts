var name: string = 'jen';
var age: number = 23;
var flag: boolean = false;

// name = false; //error

const log = (item: string): void => {
  console.log(item);
}

// log(2); //error
log('2');
log('hey');

const names: string[] = [];

// names.push(2); //error
names.push('2'); 