// reducer.js
import { SET_EDIT_INFO, TOGGLE_EDITABLE } from "../../src/actions/UpdateUserProfileActions";

const initialState = {
  editInfo: {},
  isEditable: false,
  // Add other initial state properties
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_INFO:
      return {
        ...state,
        editInfo: action.payload,
      };
    case TOGGLE_EDITABLE:
      return {
        ...state,
        isEditable: !state.isEditable,
      };
    // Handle other actions
    default:
      return state;
  }
};

export default reducer;
