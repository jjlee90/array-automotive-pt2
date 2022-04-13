//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage", 10);
// console.log(v.make)
// v.start()
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage, fuel) {
            super(make, model, year, color, mileage, fuel)
            this.maximumPassengers = 5;
            this.passenger = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false;
            this.availableRoom = true;
        }
        // load passenger method, checks to see if there is/are any seats available in the car 
    loadPassenger(num) {
            let availableSeats = this.maximumPassengers - (num + this.passenger)
            if ((num + this.passenger) < this.maximumPassengers) {

                this.availableRoom = true

                if (this.availableRoom === true) {
                    num = console.log(`There is/are ${availableSeats} seats available.`)

                }

            } else {
                num = console.log("There are no seats available")
                this.availableRoom = false

            }
        }
        // method to start car. if fuel > 0, car will start.
    start() {
            if (this.fuel > 0) {
                this.started = true
            }
            if (this.started == true) {
                console.log("engine starting...")
            } else {
                console.log("Gas tank is empty... ")
            }
        }
        // method to schedule service. 
    scheduleServiceNow(mileage) {
            if (mileage > 30000) {
                this.scheduleService = true
                console.log("Come in to your local Mercury dealership for your scheduled Service.")
            } else {
                console.log(`You are ${30000 - mileage} miles away from your next schedueled service. We'll see you when you reach 30,000 miles!`)
            }
        }
        // schedule service without mileage as a parameter
        // scheduleServiceNow() {
        //     if (this.mileage > 30000) {
        //         this.scheduleService = true
        //         console.log("Come in to your local Mercury dealership for your scheduled Service.")

    //     } else {
    //         console.log(`You are ${30000 - this.mileage} miles away from your next schedueled service. We'll see you when you reach 30,000 miles!`)
    //     }
}


let myCar = new Car("Mecury", "Sedan", "1965", "grey", "5051", 10)
myCar.start()
myCar.scheduleServiceNow(5051)
myCar.scheduleServiceNow(35051)
myCar.loadPassenger(6)
myCar.loadPassenger(4)
console.log(myCar)

// Bonus: Extra Time?
// To gain additional experience with extending base classes, design a brand new truck class using the same pattern as the activity we just completed. Be creative with your methods and properties.

class Truck extends Car {
    constructor(make, model, year, color, mileage, fuel) {
            super(make, model, year, color, mileage, fuel)
            this.flamefuel = 0;
            this.takeOffSpeed = 15;
            this.flightMode = false;
        }
        // flamethrower method, if activated, it will be active for seconds parameter that is passed in
    flamethrower(seconds) {
            if (this.flamefuel >= 10) {
                console.log(`Flamethrower has been activated for ${seconds} seconds.`)
            } else {
                console.log("Not enough flame fuel. Flamethrower cannot be activated.")
            }
        }
        // fly method, truck must reach speed of 150 mph and button needs to be pressed in order to take off
    fly(pushButton) {
        if (this.takeOffSpeed >= 150) {
            this.flightMode = true
            if (this.flightMode === true && pushButton === "pushed") {
                console.log(`Flight mode has been initiated. Get ready for take off!`)
            }
        } else {
            this.flightMode = false
            console.log("Take off speed has not been reached. Flight mode cannot be activated.")
        }
    }
}

let newTruck = new Truck("Tesla", "CyberTruck", "2055", "Silver", "1255", "50")

newTruck.start()

console.log(newTruck)

newTruck.flamethrower(5)

newTruck.fly("pushed")