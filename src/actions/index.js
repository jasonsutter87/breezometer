import {
  CHANGE_ADDRESS,
  FETCH_AIR_QUALITY_SUCCESS,
  CHANGE_ERROR_MESSAGE,
  ADD_TO_HISTORY,
} from '../constants';

export function changeAddress(address) {
  return {
    type: CHANGE_ADDRESS,
    address,
  };
}

export function fetchAirQualitySuccess(color, description, aqi) {
  return {
    type: FETCH_AIR_QUALITY_SUCCESS,
    color,
    description,
    aqi
  };
}

export function changeErrorMessage(errorMsg) {
  return {
    type: CHANGE_ERROR_MESSAGE,
    errorMsg,
  };
}

export function addToHistory(address, color, description, aqi) {
  return {
    type: ADD_TO_HISTORY,
    address,
    color,
    aqi,
    description,
  };
}
