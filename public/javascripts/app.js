// (function($){
//   $(function(){

//     $('.button-collapse').sideNav();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space


//just one marker

// function initMap(){
//         var chicagoMap = {lat: 41.8339042, lng: -88.0123513};
    
//    pottymap = new google.maps.Map(document.getElementById('map'), {
//           center: chicagoMap,
//           zoom: 10
//         });

//         var marker = new google.maps.Marker({
//          position: chicagoMap,
//          map: pottymap
//         });

//       } 


console.log('THE POTTYCHECK PAGE IS LOADED!');

angular.module('pottyCheck', [
    'ngRoute'
]).config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false // good for anything IE9+
        })

        $routeProvider
            // .when('/', {
            //     templateUrl: 'ngViews/admin.html',
            //     // controller: 'MapCtrl' // NEEDS FIXING !!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // })
            .when('/', {
                templateUrl: 'ngViews/admin.html',
                // controller: 'MapCtrl'
            })
            .when('/map', {
                templateUrl: 'ngViews/map.html', // BOUNCING PINS, ALSO FOUND ON HOMEPAGE
                // controller: 'MapCtrl'
            })
            .when('/find', {
                templateUrl: 'ngViews/find.html', // INCLUDES ARRAY OF PRE-MADE TOILET LOCATIONS
                // controller: 'MapCtrl'
            })
            .when('/youAreHere', {
                templateUrl: 'ngViews/newmarker.html', // IS YOUR CURRENT LOCATION W/ NO TOILETS
                // controller: 'MapCtrl'
            })
            .when('/home', {
                templateUrl: 'ngViews/home.html',
                // controller: 'HomeCtrl'
            })
            .when('/register', {
                templateUrl: 'ngViews/register.html',
                controller: 'RegisterCtrl'
            })
            .when('/login', {
                templateUrl: 'ngViews/login.html',
                controller: 'LoginCtrl'
            })
            .when('/create', {
                templateUrl: 'ngViews/create.html',
                controller: 'CreatePostCtrl'
            })
            .when('/comments', {
                templateUrl: 'ngViews/comments.html',
                controller: 'CommentsCtrl'
            })
            .when('/list', {
                templateUrl: 'ngViews/list.hbs',
                controller: 'FindCtrl'
            });
            // .when('/admin', {
            //     templateUrl: 'ngViews/admin.html',
            //     controller: 'DeletePostCtrl'
            // });

        $routeProvider.otherwise({ redirectTo: '/home' });
    }
]);




//one marker with info window and you are here info window
window.onload = function initFirstMap(){
        var pottymap = new google.maps.Map(document.getElementById('firstmap'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 16
        });
        var infoWindow = new google.maps.InfoWindow({
          map: pottymap,
          maxWidth: 200
        });


        // var marker = new google.maps.Marker({
        //  position: yourposition,
        //  map: pottymap
        // });

        // the location of the user
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var yourposition = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            var marker = new google.maps.Marker({
            position: yourposition,
            map: pottymap
          });

            infoWindow.setPosition(yourposition);
            infoWindow.setContent("Welcome to Potty Check! You are here!");
            pottymap.setCenter(yourposition);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      //code taken from https://developers.google.com/maps/documentation/javascript/geolocation
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }



//multiple markers
//for this to work you need this script in the layout.hbs
//<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIpSrdHM9RhwhUMEXaUeU7K9Y-xVRjrxI&callback=initAutocomplete&libraries=places" defer></script>


   window.onload = function initMap(){

      var locationsArray = [

        {
              locationName: "chicagoMap",
              geolocation: {lat: 41.88425, lng: -87.63245},
              comments: "<h5>Chicago</h5>"
        },

        {
              locationName: "greektown",
              geolocation: {lat: 41.8786, lng: -87.6471},
              comments: "<h5>Greektown</h5>"
        },
        {
              locationName: "goldcoast",
              geolocation: {lat: 41.9058, lng: -87.6273},
              comments: "<h5>Goldcoast</h5>"
        },
        {
              locationName: "hydepark",
              geolocation: {lat: 41.7943, lng: -87.5907},
              comments: "<h5>Hyde Park</h5>"
        },
        {
              locationName: "printersrow",
              geolocation: {lat:41.8783, lng: -87.6273},
              comments: "<h5>Printer's Row</h5>"
        },

          {
              locationName: "rivernorth",
              geolocation: {lat: 41.8924, lng: -87.6341},
              comments: "<h5>River North</h5>"
          },
         {
              locationName: "wrigleyville",
              geolocation: {lat:41.948437, lng: -87.655334},
              comments: "<h5>Wrigleyville</h5>"
         },
        {
              locationName: "wickerpark",
              geolocation: {lat:41.9088, lng: -87.6796},
              comments: "<h5>Wicker Park</h5>"
        },
        {
              locationName: "oldtown",
              geolocation: {lat:41.9077, lng: -87.6374},
              comments: "<h5>Old Town</h5>"
        },
        {
              locationName: "westloop",
              geolocation: {lat:41.8825, lng: -87.6447},
              comments: "<h5>West Loop</h5>"
        },
        {
              locationName: "magmile",
              geolocation: {lat:41.8948, lng: -87.6242},
              comments: "<h5>Mag Mile</h5>"
        },
        {
              locationName: "lincolnpark",
              geolocation: {lat:41.9214, lng: -87.6513},
              comments: "<h5>Lincoln Park</h5>"
        },
        {
              locationName: "lakeview",
              geolocation: {lat:41.9436, lng: -87.6584},
              comments: "<h5>Lakeview</h5>"
        },
        {
              locationName: "loop",
              geolocation: {lat: 41.8837, lng: -87.6289},
              comments: "<h5>Loop</h5>"
        }

      ];

       pottyLocate(locationsArray)

   };
        


// ============FORM AUTOCOMPLETE===============-->
      var autocomplete;
      var pottySearch;
      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        postal_code: 'short_name'
      };

      function initAutocomplete() {
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
            {types: ['geocode']});
        autocomplete.addListener('place_changed', fillInAddress);
      }



      //getting info from autocomplete
      function fillInAddress() {

        var place = autocomplete.getPlace();

        for (var component in componentForm) {
          // document.getElementById(component).material_select();
          document.getElementById(component).value = '';
          document.getElementById(component).disabled = false;
        }

        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          //code from https://google-developers.appspot.com/maps/documentation/javascript/examples/full/places-autocomplete-addressform
          if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;

            document.getElementById('lat').value = place.geometry.location.lat();
            document.getElementById('lng').value = place.geometry.location.lng();


            console.log(place.geometry.location.lat(), 'lat', place.geometry.location.lng(), 'long')
            // console.log(val, 'val')
            //var theLat  = place.geometry.location.lat(),
            //var theLong = place.geometry.location.lat()
          }
        }
      } 

        
// ===================END OF AUTOCOMPLETE====================================



      function pottyLocate(locationsArray) {


          if (!navigator.geolocation) {
          } else navigator.geolocation.getCurrentPosition(function (position) {
              
              var geolocation = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                  //zoom: 5
              };
              console.log(geolocation)
              var circle = new google.maps.Circle({
                  center: geolocation,
                  radius: position.coords.accuracy
              });
              autocomplete.setBounds(circle.getBounds());

              var pottymap = new google.maps.Map(document.getElementById('secondmap'),
                  {
                      //center: {lat: 41.88425, lng: -87.63245},
                      center: geolocation,
                      zoom: 12
                      //zoom: 30
                      });
                
              for (i = 0; i < locationsArray.length; i++) {
                  var locations = locationsArray[i].geolocation; //this might not be right
                   
                  var marker = new google.maps.Marker({
                      position: locations,
                      animation: google.maps.Animation.BOUNCE, //bounce animation
                      //animation: google.maps.Animation.DROP,
                      //icon: "icon.jpg",
                      map: pottymap
                    })

                   var infowindow = new google.maps.InfoWindow ({ 
                        maxWidth:200,
                       //pixelOffset: new google.maps.Size(200,200),
                       content: locationsArray[i].comments
                   });

                   add(marker, infowindow, pottymap, infowindow.content)
             
              }
          })

}


function add(marker, infoWindow, map, comments){
         marker.addListener('click', function(){
                      console.log()
                       infoWindow.setContent(comments);
                       infoWindow.open(map, marker);
                   });
 }   