import axios from 'axios';

function geocoding(address) {
  const geocodingUrl = process.env.REACT_APP_GEOCODING_URL;
  const apiKey = process.env.REACT_APP_GEOCODING_API_KEY;

  return `${geocodingUrl}${address}&key=${apiKey}`;
}


function getAirQuality(lat, long) {
  const breezometerUrl = process.env.REACT_APP_BREEZOMETER_URL;
  const apiKey = process.env.REACT_APP_BREEZOMETER_API_KEY;

  return `${breezometerUrl}${lat}&lon=${long}&key=${apiKey}`
}

async function AirQualityResult(address) {
  if (navigator.onLine === false) {
    return 'off-line';
  }
  try {
    const geocodingResult = await axios(geocoding(address));
    const breezometerResult = await axios(getAirQuality(
      geocodingResult.data.results[0].geometry.location.lat,
      geocodingResult.data.results[0].geometry.location.lng));
    if (breezometerResult.data.data_valid) {
      return { breezoColor: breezometerResult.data.breezometer_color,
               breezoDescription: breezometerResult.data.breezometer_description,
               breezoAqi:  breezometerResult.data.breezometer_aqi };
    }
    return 'locationError';
  } catch (error) {
    return undefined;
  }
}

export default AirQualityResult;
