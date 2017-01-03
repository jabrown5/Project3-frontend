// angular.module('pottyCheck')
//     .controller('MapCtrl', function($scope, $http, $rootScope) {

//geolocation marker with surrounding markers and infoWindow 
function initFirstMap2(){
        var pottymap = new google.maps.Map(document.getElementById('firstmap'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 16
        });


        var infoWindow = new google.maps.InfoWindow({
          map: pottymap,
          maxWidth: 200
        });


         //=========Potty Markers========

        //var image = "icon.jpg";
        //var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'; 

        var contentStringOne = "Trump Tower<br><em>This bathroom is terrible</em><br>1/5 rating";
        var infowindowOne = new google.maps.InfoWindow({
            content: contentStringOne
            });
        var pottyoneMarker = new google.maps.Marker({
            position: {lat: 41.889354, lng: -87.625114409},
            map: pottymap,
            title: "Bathroom One"
            //icon: image
            });
            pottyoneMarker.addListener('click', function() {
            infowindowOne.open(pottymap, pottyoneMarker);
            });

        //====================
        var contentStringTwo = "Jewel Osco<br>State Street<br><em>Small but clean</em><br>3/5 rating";
        var infowindowTwo = new google.maps.InfoWindow({
            content: contentStringTwo
            });
        var pottytwoMarker = new google.maps.Marker({
            position: {lat: 41.89232, lng: -87.6282730},
            map: pottymap,
            title: "Bathroom Two"
            });
            pottytwoMarker.addListener('click', function() {
            infowindowTwo.open(pottymap, pottytwoMarker);
            });
        //====================
        var contentStringThree = "Millenium Park<br>Michigan Ave<br><em>Lots of bathrooms in the pavillion and park</em><br>4/5 rating";
        var infowindowThree = new google.maps.InfoWindow({
            content: contentStringThree
            });
        var pottythreeMarker = new google.maps.Marker({
            position: {lat: 41.8834, lng: -87.62246},
            map: pottymap,
            });
            pottythreeMarker.addListener('click', function() {
            infowindowThree.open(pottymap, pottythreeMarker);
            });
        //====================
        var contentStringFour = "Shedd Aquarium<br><br>4/5 rating";
        var infowindowFour = new google.maps.InfoWindow({
            content: contentStringFour
            });
        var pottyfourMarker = new google.maps.Marker({
            position: {lat: 41.86948, lng: -87.61874},
            map: pottymap,
            });
            pottyfourMarker.addListener('click', function() {
            infowindowFour.open(pottymap, pottyfourMarker);
            });
        //====================
        var contentStringFive = "Chicago Lakefront<br><em>Bathrooms along the lakefront at each 1/2 mile...use at your own risk</em><br>4/5 rating";
        var infowindowFive = new google.maps.InfoWindow({
            content: contentStringFive
            });
        var pottyfiveMarker = new google.maps.Marker({
            position: {lat: 41.910635, lng: -87.626273},
            map: pottymap,
            });
            pottyfiveMarker.addListener('click', function() {
            infowindowFive.open(pottymap, pottyfiveMarker);
            });
        //====================
        var contentStringSix = "Trader Joe's on Ontario<br><em>2 unisex bathrooms</em><br>4/5 rating";
        var infowindowSix = new google.maps.InfoWindow({
            content: contentStringSix
            });
        var pottysixMarker = new google.maps.Marker({
            position: {lat: 41.893405914066, lng: -87.6261901855469},
            map: pottymap,
            });
            pottysixMarker.addListener('click', function() {
            infowindowSix.open(pottymap, pottysixMarker);
            });
        //====================
        var contentStringSeven = "Nordstrom<br><em>bathrooms on each floor in the back, very clean</em><br>5/5 rating";
        var infowindowSeven = new google.maps.InfoWindow({
            content: contentStringSeven
            });
        var pottysevenMarker = new google.maps.Marker({
            position: {lat: 41.8912963867188, lng: -87.6260299682617},
            map: pottymap,
            });
            pottysevenMarker.addListener('click', function() {
            infowindowSeven.open(pottymap, pottysevenMarker);
            });

        //====================
        var contentStringEight = "Hotel Palamar<br><em>Two Stalls (One Handicap-Accessible), Three Urinals</em><br>5/5 rating";
        var infowindowEight = new google.maps.InfoWindow({
            content: contentStringEight
            });
        var pottyeightMarker = new google.maps.Marker({
            position: {lat: 41.891170812901, lng: -87.627885724912},
            map: pottymap,
            });
            pottyeightMarker.addListener('click', function() {
            infowindowEight.open(pottymap, pottyeightMarker);
            });
        //====================    
        var contentStringNine = "Hotel James<br><em>Three Stalls (One Handicap-Accessible), Two Urinals</em><br>5/5 rating";
        var infowindowNine = new google.maps.InfoWindow({
            content: contentStringNine
            });
        var pottynineMarker = new google.maps.Marker({
            position: {lat: 41.893324063426, lng: -87.625764943978},
            map: pottymap,
            });
            pottynineMarker.addListener('click', function() {
            infowindowNine.open(pottymap, pottynineMarker);
            });      

        //==================================

        var contentStringTen = "McDonalds<br><em>Many bathrooms but very small</em><br>3/5 rating";
        var infowindowTen = new google.maps.InfoWindow({
            content: contentStringTen
            });
        var pottytenMarker = new google.maps.Marker({
            position: {lat: 41.8929336, lng: -87.7015333},
            map: pottymap,
            });
            pottytenMarker.addListener('click', function() {
            infowindowTen.open(pottymap, pottytenMarker);
            }); 


        // the location of the user
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var yourposition = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

        var marker = new google.maps.Marker({
            position: yourposition,
            map: pottymap,
            animation: google.maps.Animation.BOUNCE
          });

            infoWindow.setPosition(yourposition);
            infoWindow.setContent("<h6>Welcome to Potty Check! <br> You are here!</h6>");
            pottymap.setCenter(yourposition);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      //code taken from https://developers.google.com/maps/documentation/javascript/geolocation
      // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      //   infoWindow.setPosition(pos);
      //   infoWindow.setContent(browserHasGeolocation ?
      //                         'Error: The Geolocation service failed.' :
      //                         'Error: Your browser doesn\'t support geolocation.');
      // }


//========================================================
//========================================================
//========================================================
//========================================================

function initMarkerMap2() {
        var pottymap = new google.maps.Map(document.getElementById('newmarkermap'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 16
        });


        var infoWindow = new google.maps.InfoWindow({
          map: pottymap,
          maxWidth: 200
        });
//=======================================================
        var contentStringOne = "from the database";
        var infowindowOne = new google.maps.InfoWindow({
            content: contentStringOne
            });
        //this is the lat and long that would come from the database
        var position   // ???????????????????

        var pottyoneMarker = new google.maps.Marker({
            position: position,
            //position: {lat: 41.889354, lng: -87.625114409},
            map: pottymap,
            title: "Review from Database"
            //icon: image
            });
            pottyoneMarker.addListener('click', function() {
            infowindowOne.open(pottymap, pottyoneMarker);
            });
//========================================================
// the location of the user
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var yourposition = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

        var marker = new google.maps.Marker({
            position: yourposition,
            map: pottymap,
            animation: google.maps.Animation.BOUNCE
          });

            infoWindow.setPosition(yourposition);
            infoWindow.setContent("<h6>Welcome to Potty Check! <br> You are here!</h6>");
            pottymap.setCenter(yourposition);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }


    // });