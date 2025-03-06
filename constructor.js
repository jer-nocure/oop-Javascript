// Some code
function car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
{
  const car1 = new car('Toyota','silfer',200,'to-1');
  const car2 = new car('Honda','Black',180,'ho-1');
  const car3 = new car('Suzuki','red',220,'su-1');

  console.log(car1);
  console.log(car2);
  console.log(car3);

  car1.drive();
  car2.drive();
  car3.drive();
}