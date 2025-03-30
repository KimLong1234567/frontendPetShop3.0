import { jwtDecode } from "jwt-decode";

export const isAuthenticated = () => {
  const token = localStorage.getItem("authToken");

  if (!token) return false; 

  try {
    const decoded: { exp: number } = jwtDecode(token);

    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("authToken");
      return false;
    }

    return true; 
  } catch (error) {
    console.log("Failed to decode token", error);
    return false; 
  }
};
