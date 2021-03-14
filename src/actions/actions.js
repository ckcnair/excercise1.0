import * as actions from "./actionTypes";

export const createNote = (note) => {
  let today = new Date();
  let date = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;

  return {
    type: actions.NOTE_CREATED,
    payload: {
      note,
      date,
    },
  };
};

export const removeNote = (id) => {
  return {
    type: actions.NOTE_REMOVED,
    payload: {
      id,
    },
  };
};
