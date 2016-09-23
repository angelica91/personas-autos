var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);

// Se define el nombre del controlador y se manda llamar el $scope 
// y el servicio que tiene el Json inicial
app.controller('mainCtrl', function ($scope, JsonService) {

  $scope.data = JsonService.data; 
  // se asigna el arreglo de autos a la persona que se agregará
  $scope.newPerson = {autos: []};

  // Agrega el json al arreglo
  $scope.addPerson= function (parPerson) {
    $scope.data.push(parPerson);

    // Limpia el scope y de esta forma también los campos en la interfaz
    $scope.newPerson = {};
  };

  $scope.selectPerson = function (parPerson) {
    
    // Limpia los autos que se muestran en lista
    $scope.person = {
      autos:[]
    }

    // Define la persona seleccionada
    $scope.person = parPerson;
  };

  $scope.addCar = function(parCar) {
    // Agrega un auto a la persona seleccionada
    $scope.person.autos.push(parCar);
    // Limpia el scope a agregar al json y los campos de la interfaz
    $scope.newCar = {};
  };

  // Elimina el auto seleccionado del arreglo de autos de la persona seleccionada
  $scope.deleteCar = function (parIndex) {
    
    $scope.person.autos.splice(parIndex,1);
   
  };

});

