
    app.controller('alumnoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

        var codigo = $routeParams.codigo;                // captura del parametro recibido por la url
        $scope.setActive("mAlumnos");
        $scope.alumno = {};
        $scope.actualizado = false;
        $scope.creando = false;

        if (codigo == 'nuevo') {                        // 'nuevo' es el valor de $routeParams.codigo, y viene del href en alumnos.html
            $scope.creando = true;
        } else {
            $http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).success(function(data) {        // GET con parametro 'c' definido en el php para ver un registro
                if (data.err !== undefined) {
                    window.location = '#/alumnos';
                    return;
                };
    			$scope.alumno = data;
    		});
        };

        $scope.guadarAlumno = function(){
            if ($scope.creando) {
                $http.post('php/servicios/alumnos.crear.php', $scope.alumno).success(function(data) {
                    if (data.err === false) {
                        $scope.actualizado = true;
                        setTimeout(function() {
                            $scope.actualizado = false;
                            $scope.$apply();                    // cuando se invocan funciones asincronas fuera del angular es necesario
                        }, 3500);
                    };
                });
            } else {
                $http.post('php/servicios/alumnos.guardar.php', $scope.alumno).success(function(data) {
                    if (data.err === false) {
                        $scope.actualizado = true;
                        setTimeout(function() {
                            $scope.actualizado = false;
                            $scope.$apply();                    // cuando se invocan funciones asincronas fuera del angular es necesario
                        }, 3500);
                    };
                });
            };
        };

    }]);
