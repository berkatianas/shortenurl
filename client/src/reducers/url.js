import { LINK_KO, LINK_OK } from "../actions/types";
const initialState = {
  theurl: null,
  success: null,
  msg: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LINK_OK:
      return {
        ...state,
        theurl: payload,
        success: true,
        msg: null
      };
    case LINK_KO:
      return {
        ...state,
        theurl: null,
        success: false,
        msg: payload
      };
    default:
      return state;
  }
}
