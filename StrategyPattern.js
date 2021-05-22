/*
The Strategy pattern is a behavioral design pattern that enables you to define a group (or family) of closely-related algorithms (known as strategies). 
The strategy pattern allows you to swap strategies in and out for each other as needed at runtime.
*/

function Fedex() {
  this.calculate = package => {
    // fedex service calculation 
    return 500;
  }
}

function DHL() {
  this.calculate = package => {
    // DHL service calculation 
    return 400;
  }
}

function DTDC() {
  this.calculate = package => {
    // DTDC service calculation 
    return 600;
  }
}

function Shipping() {
  this.company = "";
  this.setStrategy = company => {
    this.company = company;
  }
  this.calculate = package => {
    return this.company.calculate(package);
  }
}

const fedex = new Fedex();
const dhl = new DHL();
const dtdc = new DTDC();
const package = {
  from: 'Hyderabad',
  to: 'Bangalore',
  weight: 1.5
}

// instead of doing in below way
// fedex.calculate(package);
// dhl.calculate(package);
// dtdc.calculate(package);
// have a Shipping() from where all calculate strategies can be encapsulated

const shipping = new Shipping();

shipping.setStrategy(fedex);
console.log("fedex: " + shipping.calculate(package));
// fedex: 500

shipping.setStrategy(dhl);
console.log("dhl: " + shipping.calculate(package));
// dhl: 400

shipping.setStrategy(dtdc);
console.log("dtdc: " + shipping.calculate(package));
// dhl: 600
