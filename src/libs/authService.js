import axiosInstance from './axiosService';

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/signin', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
