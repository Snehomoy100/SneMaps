mapboxgl.accessToken = 'pk.eyJ1Ijoic25laG9tb3kxMDAiLCJhIjoiY2tvNjBnaGY5MWhtZzJxbHl0NWdwOGF0dyJ9.Ps-ZNqoVkpQWZ_apcBgCyA';
        navigator.geolocation.getCurrentPosition(successLocation, errorLocaion, {
            enableHighAccuracy: true
        })



        function successLocation(position) {

            // console.log(position);

            pinLocation([position.coords.longitude, position.coords.latitude])

        };



        function errorLocaion() {
            console.log("Error!");
        };



        function pinLocation(center) {
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: center,
                zoom: 15
                });

                map.addControl(new mapboxgl.NavigationControl());

                var directions = new MapboxDirections({
                    accessToken: mapboxgl.accessToken
                  });

                map.addControl(directions, 'top-left');
        };

        


        