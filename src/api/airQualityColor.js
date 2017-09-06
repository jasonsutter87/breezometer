import axios from 'axios';

function googleRequestUrl(address) {
  const geocodingUrl = process.env.REACT_APP_GEOCODING_URL;
  const apiKey = process.env.REACT_APP_GEOCODING_API_KEY;

  return `${geocodingUrl}${address}&key=${apiKey}`;
}


function breezoRequestUrl(lat, long){
  const breezometerUrl = process.env.REACT_APP_BREEZOMETER_URL;
  const apiKey = process.env.REACT_APP_BREEZOMETER_API_KEY;

  return `${breezometerUrl}${lat}&lon=${long}&key=${apiKey}`
}

async function AirQualityColor(address) {
  try {
    const googleAPI = await axios(googleRequestUrl(address));
    const breezometerApi = axios(breezoRequestUrl(googleAPI.data.results[0].geometry.location.lat, googleAPI.data.results[0].geometry.location.lng));
    const result = await Promise.resolve(breezometerApi);
    return {breezoColor: result.data.breezometer_color, breezoDescription: result.data.breezometer_description, breezoAqi:  result.data.breezometer_aqi };
  } catch (error) {
    return undefined;
  }
}

export default AirQualityColor;
