/* eslint-disable */

(function() {

  var marketplaceId = '16c6a4b8-88ee-429b-835a-6725206cd08c';

  var el = {
    currentPos: document.getElementById('current-pos'),
    savedPos: document.getElementById('saved-pos'),
    button: document.getElementById('button'),
    origin: document.getElementById('origin'),
    bounds: document.getElementById('bounds'),
    map: document.getElementById('map'),
    login: document.getElementById('login'),
    loginBroken: document.getElementById('login-broken'),
  };

  var markers = [];

  var clearMarkers = function() {
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];
  };
  var lookupMap = function(included) {
    return included.reduce(function(memo, resource) {
      var type = resource.type;
      var id = resource.id;

      memo[type] = memo[type] || {};
      memo[type][id.uuid] = resource;

      return memo;
    }, {});
  };

  function initMap() {
    var myLatLng = {lat: 0, lng: 0};

    var map = new google.maps.Map(el.map, {
      zoom: 3,
      center: myLatLng
    });

    google.maps.event.addListener(map, 'mousemove', function (event) {
      el.currentPos.textContent = [event.latLng.lat(), event.latLng.lng()].join(',');
    });

    var clickMarker = new google.maps.Marker({
      title: 'test',
      label: '*',
    });

    google.maps.event.addListener(map, 'click', function (event) {
      el.savedPos.textContent = [event.latLng.lat(), event.latLng.lng()].join(',');
      clickMarker.setPosition(event.latLng);
      clickMarker.setMap(map);
    });

    var sdk = sharetribeSdk.createInstance({
      clientId: '08ec69f6-d37e-414d-83eb-324e94afddf0',
      baseUrl: 'http://localhost:8088/',
    });

    el.login.addEventListener('click', function() {
      sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' });
    });

    el.loginBroken.addEventListener('click', function() {
      sdk.login({ username: 'non-existing-user@example.com', password: 'password' });
    });

    var handleResult = function(res) {
      clearMarkers();

      var includedMap = lookupMap(res.data.included);

      res.data.data.forEach(function(listing, i) {

        var authorLink = listing.relationships.author.data;
        var author = includedMap[authorLink.type][authorLink.id.uuid];

        var marker = new google.maps.Marker({
          position: listing.attributes.geolocation,
          title: 'test',
          label: '' + (i + 1),
        });

        var infowindow = new google.maps.InfoWindow({
          content: [
            '<p><strong>' + listing.attributes.title + '</strong></p>',
            '<p>' + listing.attributes.description + '</p>',
            '<p>Seller: ' + [author.attributes.profile.firstName, author.attributes.profile.lastName, '(' + author.attributes.email + ')'].join(' ') + '</p>',
          ].join(''),
        });

        marker.setMap(map);

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        markers.push(marker);
      });
    };

    el.button.addEventListener('click', function() {
      var originVal = el.origin.value;
      var boundsVal = el.bounds.value;

      var params = { include: ['author'] };

      if (originVal) {
        params.origin = originVal;
      }

      if (boundsVal) {
        params.bounds = boundsVal;
      }

      sdk
        .listings.search(params)
        .then(handleResult);
    });

    if (window.initialData) {
      handleResult(window.initialData);
    }

  }

  initMap();
})();
