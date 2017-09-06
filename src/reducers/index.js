import {
  CHANGE_ADDRESS,
  CHANGE_COLOR,
  CHANGE_DESCRIPTION,
  CHANGE_AQI,
  CHANGE_ERROR_MESSAGE,
  ADD_TO_HISTORY,
} from '../actions';


const initialState = {
  errorMsg: '',
  history: [{
  }],
};


function BreezoReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ADDRESS:
      return Object.assign({}, state, { address: action.address });
    case CHANGE_COLOR:
      return Object.assign({}, state, { color: action.color });
    case CHANGE_DESCRIPTION:
      return Object.assign({}, state, { description: action.description });
    case CHANGE_AQI:
      return Object.assign({}, state, { aqi: action.aqi });
    case CHANGE_ERROR_MESSAGE:
      return Object.assign({}, state, { errorMsg: action.errorMsg });
    case ADD_TO_HISTORY:
      return Object.assign({}, state, { history: state.history.concat([{
        address: state.address,
        color: state.color,
        description: state.description,
        aqi: state.aqi,
        errorMsg: state.errorMsg,
      }])
      });
    default:
      return state;
  }
}

export default BreezoReducer;
