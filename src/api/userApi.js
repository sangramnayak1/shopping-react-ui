// src/api/userApi.js
export const getProfile = async () => {
  // Replace with backend API call
  return {
    name: "John Doe",
    email: "john@example.com"
  };
};

export const updateProfile = async (profileData) => {
  // Replace with backend API call
  console.log("Profile updated:", profileData);
  return { success: true };
};

export const registerUser = async (userData) => {
  // Replace with backend API call
  console.log("User registered:", userData);
  return { success: true };
};
