export default function validateUser(userData) {
    const errors = {};
  
    if (!userData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = "Email is invalid";
    }
  
    if (!userData.password) {
      errors.password = "Password is required";
    } else if (userData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  
    return Object.keys(errors).length > 0 ? errors : null;
  }