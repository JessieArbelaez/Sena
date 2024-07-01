import axios from 'axios';

const API_URL = 'http://localhost:8000';

const userService = {
    getAllUsers: async () => {
        const response = await axios.get(`${API_URL}/usuarios`);
        return response.data;
    },
    getUserById: async (id) => {
        const response = await axios.get(`${API_URL}/usuarios/${id}`);
        return response.data;
    },
    createUser: async (user) => {
        const response = await axios.post(`${API_URL}/usuarios`, user);
        return response.data;
    },
    updateUser: async (id, user) => {
        const response = await axios.put(`${API_URL}/usuarios/${id}`, user);
        return response.data;
    },
    deleteUser: async (id) => {
        const response = await axios.delete(`${API_URL}/usuarios/${id}`);
        return response.data;
    }
};

export default userService;
