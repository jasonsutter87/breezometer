import axios from 'axios';

async function AirQualityColor(address) {
  try {
    const googleAPI = await axios(`${process.env.REACT_APP_GEOCODING_URL}${address},+CA&key=${process.env.REACT_APP_GEOCODING_API_KEY}`);
    const breezometerApi = axios(`${process.env.REACT_APP_BREEZOMETER_URL}${googleAPI.data.results[0].geometry.location.lat}&lon=${googleAPI.data.results[0].geometry.location.lng}&key=${process.env.REACT_APP_BREEZOMETER_API_KEY}`);
    const result = await Promise.resolve(breezometerApi);
    return {breezoColor: result.data.breezometer_color, breezoDescription: result.data.breezometer_description};
  } catch (error) {
    return undefined;
  }
}

export default AirQualityColor;
