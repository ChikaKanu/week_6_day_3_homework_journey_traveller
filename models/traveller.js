const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map((journey) =>  journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map((journey) =>  journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter((journey) =>  journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
return this.journeys.filter((journey) =>  journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function (total, journey) {
  return this.journeys.reduce((total, journey) => total + journey.distance,0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modeOfTransport = this.journeys.map((journey) => journey.transport);
  return modeOfTransport.filter((item, index) => modeOfTransport.indexOf(item) === index);
};


module.exports = Traveller;
