export const CHANGE_ADDRESS = 'CHANGE_ADDRESS';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const CHANGE_AQI = 'CHANGE_AQI';
export const CHANGE_ERROR_MESSAGE = 'CHANGE_ERROR_MESSAGE';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

export function changeAddress(address) {
  return {
    type: 'CHANGE_ADDRESS',
    address,
  };
}

export function changeColor(color) {
  return {
    type: 'CHANGE_COLOR',
    color,
  };
}

export function changeDescription(description) {
  return {
    type: 'CHANGE_DESCRIPTION',
    description,
  };
}

export function changeAqi(aqi) {
  return {
    type: 'CHANGE_AQI',
    aqi,
  };
}

export function changeErrorMessage(errorMsg) {
  return {
    type: 'CHANGE_ERROR_MESSAGE',
    errorMsg,
  };
}

export function addToHistory(address, color, description) {
  return {
    type: ADD_TO_HISTORY,
    address,
    color,
    description,
  };
}
