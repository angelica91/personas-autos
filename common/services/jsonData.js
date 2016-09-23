// Servicio que contiene el Json inicial
angular.module('myApp')
  .service('JsonService', function() {
    this.data = 
      [
        {
          nombre: 'Angelica',
          apellidoPaterno: 'Jimenez',
          apellidoMaterno: 'Montero',
          fechaNacimiento: '30/10/1991',
          autos: [
            {
              marca: 'Pontiac',
              modelo: 'Matiz G2',
              ano: '2007',
              color: 'Blanco'
            }
          ]
        }
      ]
  });
