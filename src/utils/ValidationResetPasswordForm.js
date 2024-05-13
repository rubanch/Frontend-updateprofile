export const validateResetPasswordForm = (passwordData) => {
    const errors = {};

    if (!passwordData.oldpassword.trim()) {
        errors.oldpassword = 'Old Password is required';
    } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,14}$/.test(passwordData.oldpassword)) {
        errors.oldpassword = 'Password must be between 8 to 14 characters, must contain one uppercase, one lowercase, and one special character';
    }

    // Add validation for new password and confirm password fields...

    return errors;
};