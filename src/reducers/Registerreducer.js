
const initialState = {
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
    selectedOptions: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_DATA':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;