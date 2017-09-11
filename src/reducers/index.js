import {
  CHANGE_ADDRESS,
  CHANGE_ERROR_MESSAGE,
  FETCH_AIR_QUALITY_SUCCESS,
  ADD_TO_HISTORY,
} from '../constants';

const initialState = {
  address: '',
  errorMsg: '',
  history: [],
};

function BreezoReducer(state = initialState, action) {
  const { address, color, aqi, description, errorMsg, type } = action;
  switch (type) {
    case CHANGE_ADDRESS:
      return Object.assign({}, state, { address });
    case FETCH_AIR_QUALITY_SUCCESS:
      return Object.assign({}, state, { description }, { color }, { aqi });
    case CHANGE_ERROR_MESSAGE:
      return Object.assign({}, state, { errorMsg });
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [{
          address: state.address,
          color,
          aqi,
          description,
        }, ...state.history],
      };
    default:
      return state;
  }
}

export default BreezoReducer;
