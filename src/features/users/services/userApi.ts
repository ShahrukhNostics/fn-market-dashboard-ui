import axios from '../../../services/axios'

export const getUsers = async () => {
    const response = await axios.get('/users');
    return response.data;
  };
  
  export const createUser = async (newUser: { name: string, email: string }) => {
    const response = await axios.post('/users', newUser);
    return response.data;
  };
  
  export const updateUser = async (id: number, updatedUser: { name: string, email: string }) => {
    const response = await axios.put(`/users/${id}`, updatedUser);
    return response.data;
  };
  
  export const deleteUser = async (id: number) => {
    const response = await axios.delete(`/users/${id}`);
    return response.data;
  };