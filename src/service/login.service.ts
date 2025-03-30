import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.API_URL;

export const login = async (account: object): Promise<void> => {
  try {
    const response = await axios.post(API_URL + "/login", account);
    const token: string = response.data;
    localStorage.setItem("token", token);

    toast.success('Login success', {
      position: 'top-center',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  } catch (error) {
    toast.error('Login failed', {
      position: 'top-center',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    console.error('Failed to login', error);
  }
}

export const logout = (navigate: (path: string) => void): void => {
  try {
    localStorage.removeItem("token");
    toast.success('Logout success', {
      position: 'top-center',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate('/login');
  } catch (error) {
    toast.error('Logout failed', {
      position: 'top-center',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    console.error('Failed to logout', error);
  }
}

export const resetPassword = async (token: string) => {
  try {
    axios.post(API_URL + '/reset-password', {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    })
      .then(() => {
        toast.success('Check-in your email', {
          position: 'top-center',
          autoClose: 2000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  } catch (error) {
    console.error('Error reset:', error);
    toast.error('reset failed', {
      position: 'top-center',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }
}