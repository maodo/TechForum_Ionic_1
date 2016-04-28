/**
 * Access Controller
 */
angular.module('app')
    .controller('AccessController', ['$scope','$ionicLoading', function($scope,$ionicLoading)
    {
        console.log('--- AccessController ---');
        $scope.fromLilleFlandre = false;
        $scope.fromlesquin = false;

        /** display route to WorldLine by from **/
        $scope.displayFrom = function(from){
            if(from == 'lille'){
                var a = $scope.fromLilleFlandre ? $scope.fromLilleFlandre = false : $scope.fromLilleFlandre = true;
            }else if(from == 'lesquin'){
                var b = $scope.fromlesquin ? $scope.fromlesquin = false : $scope.fromlesquin =true;
            }else
                alert("Impossible to display From "+from);
        };

        /** Default Worldline Seclin GPS **/
        $scope.worldlineGPS ={
            latitude: 50.567593,
            longitude: 3.029413
        };
            
        $scope.getMyGps = function(){
            $ionicLoading.show();
            setTimeout(function() {$ionicLoading.hide();}, 10000);
            var myPos;

            // onSuccess Callback
            // This method accepts a Position object, which contains the
            // current GPS coordinates
             var onSuccess = function(position) {
                   console.log('Latitude: '          + position.coords.latitude          + '\n' +
                               'Longitude: '         + position.coords.longitude         + '\n' +
                                'Altitude: '          + position.coords.altitude          + '\n' +
                                'Accuracy: '          + position.coords.accuracy          + '\n' +
                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                                'Heading: '           + position.coords.heading           + '\n' +
                                'Speed: '             + position.coords.speed             + '\n' +
                                'Timestamp: '         + position.timestamp                + '\n');
                    myPos = position;
                    console.log('--- getCurrentPosition ---' + myPos);
                    launchnavigator.navigate(
                                        [$scope.worldlineGPS.latitude, $scope.worldlineGPS.longitude],
                                        [myPos.coords.latitude, myPos.coords.longitude],
                                        function(myPos){
                                            $ionicLoading.hide();
                                             console.log('--- navigate success ---' + myPos);
                                            // alert("Plugin success");
                                        },
                                        function(error){
                                            $ionicLoading.hide();
                                            console.log('--- navigate error ---' + error);
                                            // alert("Plugin error: "+ error);
                                        }
                                    );
                                };


                // onError Callback receives a PositionError object
                function onError(error) {
                    $ionicLoading.hide();
                    alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
                }

                navigator.geolocation.getCurrentPosition(onSuccess,onError);

                };


    }]);