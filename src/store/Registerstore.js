import { createStore } from 'redux';



const initialState = {
  user: {
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
    otp: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
    selectedOptions: [],
  },
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(userReducer);

export default store;