angular.module('myApp')
	.directive('myDatepicker', function () {
		return {
      // Se establece el template de la directiva
      template: "<p class='input-group'>" +
                    "<input type='text' class='form-control' uib-datepicker-popup='dd/MM/yyyy' ng-model='newPerson.fechaNacimiento'" +
                            "is-open='popup1.opened' datepicker-options='dateOptions' ng-required='true' close-text='Cerrar'" + 
                            "today-text='Hoy' clear-text='Limpiar' alt-input-formats='dd/MM/yyyy' />" +
                    "<span class='input-group-btn'>" + 
                      "<button type='button' class='btn btn-default height-140' ng-click='open1()''>" +
                        "<i class='glyphicon glyphicon-calendar'></i></button>" +
                    "</span>" +
                  "</p>",
      // se asigna el controlador
      controller: 'datePickerCtrl'
		}
	})
  .controller('datePickerCtrl', function datePickerController ($scope) {

      // Limpia el input 
      $scope.clear = function() {
        $scope.fechaNacimiento = null;
      };

     // Muestra el Calendario
      $scope.open1 = function() {
        $scope.popup1.opened = true;
      };

      // Define que el datepiker inicie cerrado
      $scope.popup1 = {
        opened: false
      };
  });