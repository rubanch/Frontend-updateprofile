// // validate.js
// export const ValidationUpdateUserProfile = (editInfo) => {
//     const errors = {};
//     const requiredFields = ['firstname', 'lastname', 'DOB', 'gender', 'contactNumber', 'stream'];

//     requiredFields.forEach(field => {
//         if (!editInfo[field]) {
//             errors[field] = 'This field is required';
//         }
//     });

//     // Additional validation for the phone number format can be added here
//     // Example: if (!/^\d{10}$/.test(editInfo.contactNumber)) { errors.contactNumber = 'Invalid phone number'; }

//     return errors;
// };




export const ValidationUpdateUserProfile = (editInfo) => {
    const errors = {};
    const requiredFields = ['firstName', 'lastName', 'dob', 'gender', 'contactNumber', 'stream'];

    requiredFields.forEach(field => {
        if (!editInfo[field]) {
            errors[field] = 'This field is required';
        }
    });

    // Validation for the phone number format
    if (editInfo.contactNumber && !/^\d{10}$/.test(editInfo.contactNumber)) {
        errors.contactNumber = 'Invalid phone number';
    }

    return errors;
};
