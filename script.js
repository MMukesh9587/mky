let currentLink = "";
let map;
let marker;

function initMap() {
  const defaultLoc = { lat: 26.9124, lng: 75.7873 }; // Jaipur
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: defaultLoc,
  });

  map.addListener("click", function (e) {
    const lat = e.latLng.lat().toFixed(6);
    const lng = e.latLng.lng().toFixed(6);
    const link = `https://www.google.com/maps?q=${lat},${lng}`;
    currentLink = link;

    document.getElementById("latlng").innerText = `${lat}, ${lng}`;
    document.getElementById("gmapLink").href = link;

    document.getElementById("whatsappShare").href = `https://wa.me/?text=📍%20Location:%20${encodeURIComponent(link)}`;
    document.getElementById("emailShare").href = `mailto:?subject=Dropped%20Pin&body=📍%20Location:%20${encodeURIComponent(link)}`;

    if (marker) marker.setMap(null);
    marker = new google.maps.Marker({
      position: { lat: parseFloat(lat), lng: parseFloat(lng) },
      map: map,
    });
  });
}

function copyLink() {
  if (!currentLink) {
    alert("Please Click On The Map First.");
    return;
  }
  navigator.clipboard.writeText(currentLink).then(() => {
    alert("🔗 Link Copied!");
  });
}

function getLiveLocation() {
  if (!navigator.geolocation) {
    alert("Your Browser Does Not Support Geolocation.");
    return;
  }

  document.getElementById("latlng").innerText = "🔍 The Location Is Being Searched...";

  const options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(6);
      const lng = position.coords.longitude.toFixed(6);
      const accuracy = position.coords.accuracy;
      const link = `https://www.google.com/maps?q=${lat},${lng}`;
      currentLink = link;

      document.getElementById("latlng").innerText = `${lat}, ${lng} (±${Math.round(accuracy)}m)`;
      document.getElementById("gmapLink").href = link;
      document.getElementById("whatsappShare").href = `https://wa.me/?text=📍%20Location:%20${encodeURIComponent(link)}`;
      document.getElementById("emailShare").href = `mailto:?subject=Dropped%20Pin&body=📍%20Location:%20${encodeURIComponent(link)}`;

      map.setCenter({ lat: parseFloat(lat), lng: parseFloat(lng) });
      map.setZoom(18);

      if (marker) marker.setMap(null);
      marker = new google.maps.Marker({
        position: { lat: parseFloat(lat), lng: parseFloat(lng) },
        map: map,
        title: `Your Location (±${Math.round(accuracy)}m accuracy)`
      });

      const accuracyCircle = new google.maps.Circle({
        strokeColor: '#1a73e8',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#1a73e8',
        fillOpacity: 0.15,
        map: map,
        center: { lat: parseFloat(lat), lng: parseFloat(lng) },
        radius: accuracy
      });
    },
    (error) => {
      let errorMessage = "Could Not Get Location. ";
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMessage += "Please allow location.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage += "Location information is not available.";
          break;
        case error.TIMEOUT:
          errorMessage += "It's taking time to find the location. Please try again.";
          break;
        default:
          errorMessage += "An unknown error has occurred.";
          break;
      }
      alert(errorMessage);
      document.getElementById("latlng").innerText = "--- Click on Map ---📍";
    },
    options
  );
}

window.onload = initMap;
let currentLink = "";
let map;
let marker;

function initMap() {
  const defaultLoc = { lat: 26.9124, lng: 75.7873 }; // Jaipur
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: defaultLoc,
  });

  map.addListener("click", function (e) {
    const lat = e.latLng.lat().toFixed(6);
    const lng = e.latLng.lng().toFixed(6);
    const link = `https://www.google.com/maps?q=${lat},${lng}`;
    currentLink = link;

    document.getElementById("latlng").innerText = `${lat}, ${lng}`;
    document.getElementById("gmapLink").href = link;

    document.getElementById("whatsappShare").href = `https://wa.me/?text=📍%20Location:%20${encodeURIComponent(link)}`;
    document.getElementById("emailShare").href = `mailto:?subject=Dropped%20Pin&body=📍%20Location:%20${encodeURIComponent(link)}`;

    if (marker) marker.setMap(null);
    marker = new google.maps.Marker({
      position: { lat: parseFloat(lat), lng: parseFloat(lng) },
      map: map,
    });
  });
}

function copyLink() {
  if (!currentLink) {
    alert("Please Click On The Map First.");
    return;
  }
  navigator.clipboard.writeText(currentLink).then(() => {
    alert("🔗 Link Copied!");
  });
}

function getLiveLocation() {
  if (!navigator.geolocation) {
    alert("Your Browser Does Not Support Geolocation.");
    return;
  }

  document.getElementById("latlng").innerText = "🔍 The Location Is Being Searched...";

  const options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(6);
      const lng = position.coords.longitude.toFixed(6);
      const accuracy = position.coords.accuracy;
      const link = `https://www.google.com/maps?q=${lat},${lng}`;
      currentLink = link;

      document.getElementById("latlng").innerText = `${lat}, ${lng} (±${Math.round(accuracy)}m)`;
      document.getElementById("gmapLink").href = link;
      document.getElementById("whatsappShare").href = `https://wa.me/?text=📍%20Location:%20${encodeURIComponent(link)}`;
      document.getElementById("emailShare").href = `mailto:?subject=Dropped%20Pin&body=📍%20Location:%20${encodeURIComponent(link)}`;

      map.setCenter({ lat: parseFloat(lat), lng: parseFloat(lng) });
      map.setZoom(18);

      if (marker) marker.setMap(null);
      marker = new google.maps.Marker({
        position: { lat: parseFloat(lat), lng: parseFloat(lng) },
        map: map,
        title: `Your Location (±${Math.round(accuracy)}m accuracy)`
      });

      const accuracyCircle = new google.maps.Circle({
        strokeColor: '#1a73e8',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#1a73e8',
        fillOpacity: 0.15,
        map: map,
        center: { lat: parseFloat(lat), lng: parseFloat(lng) },
        radius: accuracy
      });
    },
    (error) => {
      let errorMessage = "Could Not Get Location. ";
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMessage += "Please allow location.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage += "Location information is not available.";
          break;
        case error.TIMEOUT:
          errorMessage += "It's taking time to find the location. Please try again.";
          break;
        default:
          errorMessage += "An unknown error has occurred.";
          break;
      }
      alert(errorMessage);
      document.getElementById("latlng").innerText = "--- Click on Map ---📍";
    },
    options
  );
}

window.onload = initMap;
let currentLink = "";
let map;
let marker;

function initMap() {
  const defaultLoc = { lat: 26.9124, lng: 75.7873 }; // Jaipur
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: defaultLoc,
  });

  map.addListener("click", function (e) {
    const lat = e.latLng.lat().toFixed(6);
    const lng = e.latLng.lng().toFixed(6);
    const link = `https://www.google.com/maps?q=${lat},${lng}`;
    currentLink = link;

    document.getElementById("latlng").innerText = `${lat}, ${lng}`;
    document.getElementById("gmapLink").href = link;

    document.getElementById("whatsappShare").href = `https://wa.me/?text=📍%20Location:%20${encodeURIComponent(link)}`;
    document.getElementById("emailShare").href = `mailto:?subject=Dropped%20Pin&body=📍%20Location:%20${encodeURIComponent(link)}`;

    if (marker) marker.setMap(null);
    marker = new google.maps.Marker({
      position: { lat: parseFloat(lat), lng: parseFloat(lng) },
      map: map,
    });
  });
}

function copyLink() {
  if (!currentLink) {
    alert("Please Click On The Map First.");
    return;
  }
  navigator.clipboard.writeText(currentLink).then(() => {
    alert("🔗 Link Copied!");
  });
}

function getLiveLocation() {
  if (!navigator.geolocation) {
    alert("Your Browser Does Not Support Geolocation.");
    return;
  }

  document.getElementById("latlng").innerText = "🔍 The Location Is Being Searched...";

  const options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(6);
      const lng = position.coords.longitude.toFixed(6);
      const accuracy = position.coords.accuracy;
      const link = `https://www.google.com/maps?q=${lat},${lng}`;
      currentLink = link;

      document.getElementById("latlng").innerText = `${lat}, ${lng} (±${Math.round(accuracy)}m)`;
      document.getElementById("gmapLink").href = link;
      document.getElementById("whatsappShare").href = `https://wa.me/?text=📍%20Location:%20${encodeURIComponent(link)}`;
      document.getElementById("emailShare").href = `mailto:?subject=Dropped%20Pin&body=📍%20Location:%20${encodeURIComponent(link)}`;

      map.setCenter({ lat: parseFloat(lat), lng: parseFloat(lng) });
      map.setZoom(18);

      if (marker) marker.setMap(null);
      marker = new google.maps.Marker({
        position: { lat: parseFloat(lat), lng: parseFloat(lng) },
        map: map,
        title: `Your Location (±${Math.round(accuracy)}m accuracy)`
      });

      const accuracyCircle = new google.maps.Circle({
        strokeColor: '#1a73e8',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#1a73e8',
        fillOpacity: 0.15,
        map: map,
        center: { lat: parseFloat(lat), lng: parseFloat(lng) },
        radius: accuracy
      });
    },
    (error) => {
      let errorMessage = "Could Not Get Location. ";
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMessage += "Please allow location.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage += "Location information is not available.";
          break;
        case error.TIMEOUT:
          errorMessage += "It's taking time to find the location. Please try again.";
          break;
        default:
          errorMessage += "An unknown error has occurred.";
          break;
      }
      alert(errorMessage);
      document.getElementById("latlng").innerText = "--- Click on Map ---📍";
    },
    options
  );
}

window.onload = initMap;
