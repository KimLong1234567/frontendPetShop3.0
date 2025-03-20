import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;

export const getCustomers: object = async (token: string) => {
  try {
    const response = await axios.get(API_URL + '/users', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    toast.error('Failed to get users');
    console.error('Failed to get users', error);
  }
};

export const getCustomerById: object = async (token: string, id: number) => {
  try {
    const response = await axios.get(API_URL + '/users/' + id, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    toast.error('Failed to get customer');
    console.error('Failed to get customer', error);
  }
}

export const createCustomer: object = async (token: string, data: object) => {
  try {
    await axios.post(API_URL + '/users', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(() => {
        toast.success('Customer created successfully', {
          position: 'top-center',
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  } catch (error) {
    toast.error('Failed to create customer');
    console.error('Failed to create customer', error);
  }
}

export const updateCustomer: object = async (token: string, userId: number, data: object) => {
  try {
    await axios.put(API_URL + '/users?queryParams=' + userId, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(() => {
        toast.success('Customer created successfully', {
          position: 'top-center',
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });;
  } catch (error) {
    toast.error('Failed to update customer');
    console.error('Failed to update customer', error);
  }
}

export const deleteCustomer: object = async (token: string, userId: string) => {
  try {
    await axios.delete(API_URL + '/users?queryParams=' + userId, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(() => {
        toast.success('Customer created successfully', {
          position: 'top-center',
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  } catch (error) {
    toast.error('Failed to delete customer');
    console.error('Failed to delete customer', error);
  }
}