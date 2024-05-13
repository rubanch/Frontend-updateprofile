export const SET_EDIT_INFO = 'SET_EDIT_INFO';
export  const TOGGLE_EDITABLE = 'TOGGLE_EDITABLE';
 const FETCH_DATA = 'FETCH_DATA';
 const UPDATE_STATUS = 'UPDATE_STATUS';


 export const setEditInfo = (info) => ({
    type: SET_EDIT_INFO,
    payload: info,
  });
  
  export const toggleEditable = () => ({
    type: TOGGLE_EDITABLE,
  });
  