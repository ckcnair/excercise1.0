import * as actions from "./actionTypes";

export const createNote = (note) => {
  return {
    type: actions.NOTE_CREATED,
    note,
  };
};

export const removeNote = (id) => {
  return {
    type: actions.NOTE_REMOVED,
    id: id,
  };
};
