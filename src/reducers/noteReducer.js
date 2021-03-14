import * as actions from "../actions/actionTypes";

let notes = (state = [], action) => {
  switch (action.type) {
    case actions.NOTE_CREATED:
      return [...state, Object.assign({}, action.note)];
    case actions.NOTE_REMOVED:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};

export default notes;
