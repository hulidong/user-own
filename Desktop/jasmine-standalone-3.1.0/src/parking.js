function ParkingSpec() {
}
ParkingSpec.prototype.Parking = function(parameter) {
	this.ParkinLotNums = 100
	this.cerrentParkinLotNums = 89
	this.existence = true
};
ParkingSpec.prototype.depositCarOrTakeCar = function(parameter) {
    this.Parking()
	if (parameter === '存车') {
	  if (this.ParkinLotNums > this.cerrentParkinLotNums) {
	  	this.depositFlag = true
	  } else {
	  	this.depositFlag = false
	  }
	}
	if (parameter === '取车') {
	  if (this.existence) {
	  	this.takeFlag = true
	  } else {
	  	this.takeFlag = false
	  }
	}
};



