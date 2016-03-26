
	app.controller('alumnosCtrl', ['$scope', '$http', function($scope, $http) {

		$scope.setActive("mAlumnos");
		$scope.alumnos = {};
		$scope.posicion = 5;

		$http.get('php/servicios/alumnos.listado.php').success(function(data) {

			$scope.alumnos = data;

		});

		$scope.siguientes = function() {

			if ($scope.alumnos.length > $scope.posicion) {				// si la longitud de alumos todavia es mayor que la posicion actual aumenta 5 la posicion
				$scope.posicion += 5;
			};

		};

		$scope.anteriores = function() {

			if ($scope.posicion > 5) {									// si la posicion es mayor que 5 es porque no ha llegado al principio
				$scope.posicion -= 5;
			};

		};

	}]);
