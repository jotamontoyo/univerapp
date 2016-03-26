
    var app = angular.module('universidadApp', ['ngRoute', 'ui.mask']);

    app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

    	$scope.menuSuperior = 'parciales/menu.html';
        $scope.telefonoMask = '999-999-999';

    	$scope.setActive = function(Opcion) {                                         // setActive() asociará el nombre de la opcion al ng-class del menu.html
    		$scope.mInicio     = "";                                                  // define las variables que controlan el status de cada opcion del menu
    		$scope.mProfesores = "";
    		$scope.mAlumnos    = "";
    		$scope[Opcion] = "active";
    	};

    }]);

    app.filter('telefono', function() {                                     // da formato al número de teléfono
        return function(numero) {
            return numero.substring(0, 3) + "-" + numero.substring(3, 6) + "-" + numero.substring(6, 9);
//            return numero.substring(0, 4) + "-" + numero.substring(4);
        }

    });
