const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const array = this.journeys.map(journey => journey.startLocation);
  return array;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const array = this.journeys.map(journey => journey.endLocation);
  return array;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const array = this.journeys.filter(journey =>
  journey.transport === transport);
  return array;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const array = this.journeys.filter(journey => journey.distance >= minDistance);
  return array;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
