import * as actions from "../actions/actionTypes";

let num = 0;
const notes = (state = [], action) => {
  switch (action.type) {
    case actions.NOTE_CREATED:
      return [
        ...state,
        {
          id: ++num,
          note: action.payload.note,
          date: action.payload.date,
        },
      ];
    case actions.NOTE_REMOVED:
      return state.filter((data, i) => i !== action.payload.id);
    default:
      return state;
  }
};
export default notes;
