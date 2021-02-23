'use strict';

// class Thermostat {
//   constructor() {
//     this.temperature = 20;
//   }
//   getCurrentTemperature() {
//     return this.temperature;
//   }
// };

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
  }
  isMinimumTemperature() {
   return this.temperature === this.MINIMUM_TEMPERATURE;
 }
  getCurrentTemperature() {
    return this.temperature;
  }
  up() {
    this.temperature += 1
  }
  down() {
    if (this.isMinimumTemperature()) {
     return;
   }
    this.temperature -= 1
  }
}
