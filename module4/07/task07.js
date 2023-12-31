'use strict';
// sources:
// https://digitransit.fi/en/developers/apis/1-routing-api/itinerary-planning/
// route points are in Google polyline encoded format, so you need to add support for Leafletiin:
// https://github.com/jieter/Leaflet.encoded


// show the map
const map = L.map('map').setView([60.1785553, 24.8786212], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const apiAddress = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'; // cors issues may arise, use proxy or browser plugin if necessary


// fetch route with origin and target
async function getRoute(origin, target) {
    // GraphQL query
    const GQLQuery = `{
  plan( 
    from: {lat: ${origin.latitude}, lon: ${origin.longitude}}
    to: {lat: ${target.latitude}, lon: ${target.longitude}}
    numItineraries: 1
  ) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        duration
        distance
        legGeometry {
          points
        }
      }
    }
  }
}`;

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'digitransit-subscription-key': ' API KEY HERE ',
        },
        body: JSON.stringify({query: GQLQuery}),
    };

    fetch(apiAddress, fetchOptions).then(async function (response) {
        return response.json();
    }).then(function (result) {
        let travelTimeDiv = document.getElementById('travelTime');
        console.log(result.data.plan.itineraries[0]);
        let startTime = document.createElement('p');
        let endTime = document.createElement('p');
        const path = result.data.plan.itineraries[0].legs
        const startDate=new Date(path[0].startTime * 1000);
        const endDate=new Date(path[path.length-1].endTime * 1000);
        startTime.innerText = startDate.toString();
        endTime.innerText = endDate.toString();
        travelTimeDiv.appendChild(startTime);
        travelTimeDiv.appendChild(endTime);
        const googleEncodedRoute = result.data.plan.itineraries[0].legs;
        for (let i = 0; i < googleEncodedRoute.length; i++) {
            let color = '';
            switch (googleEncodedRoute[i].mode) {
                case 'WALK':
                    color = 'green';
                    break;
                case 'BUS':
                    color = 'red';
                    break;
                case 'RAIL':
                    color = 'cyan'
                    break;
                case 'TRAM':
                    color = 'magenta'
                    break;
                default:
                    color = 'blue';
                    break;
            }
            const route = (googleEncodedRoute[i].legGeometry.points);
            const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
            L.polyline(pointObjects).setStyle({
                color
            }).addTo(map);
        }
        map.fitBounds([[origin.latitude, origin.longitude], [target.latitude, target.longitude]]);
    }).catch(function (e) {
        console.error(e.message);
    });
}


async function addressSearch(address,callback) {
    //validate and preprocess url
    const _queryUrl = `http://api.digitransit.fi/geocoding/v1/search?text=${address}&size=1`;
    const _headers = {
        'Content-Type': 'application/json',
        'digitransit-subscription-key': 'API KEY HERE',
    };
    fetch(_queryUrl, {
        method: 'GET',
        headers: _headers
    }).then(response => response.json()).then(json => {
        if (json !== '') {
            callback(null, json)
        } else {
            callback(json, null)
        }
    }).catch(err => {
        callback(err)
    })
}

// get route from origin to target

const addressQuery = document.querySelector('#addressForm');


addressQuery.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    let mapDiv = document.getElementById('map');
    mapDiv.style.width='100%';
    mapDiv.style.height='400px';
    let query = document.querySelector('input[name=q]').value;
    try{

        await addressSearch(query, (data, array) => {
            getRoute({
                latitude: array.features[0].geometry.coordinates[1],
                longitude: array.features[0].geometry.coordinates[0]
            }, {latitude: 60.223876, longitude: 24.758061})
        });

    } catch (error) {
        console.log(error)
    }

})
