// geoModule.js
export const geo = {
  askPermissions: function (successCallback, errorCallback) {
    if (!navigator.geolocation) {
      errorCallback("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  },

  getLongitude: function (position) {
    return position.coords.longitude;
  },

  getAltitude: function (position) {
    return position.coords.altitude;
  },
};
