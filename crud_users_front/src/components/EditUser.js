import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import userService from '../services/userService';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const EditUser = () => {
    const { id } = useParams();
    const history = useHistory();
    const [user, setUser] = useState({ nomuser: '', password: '' });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const data = await userService.getUserById(id);
        setUser({ nomuser: data.nomuser, password: '' }); // Dejar la contraseña en blanco
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await userService.updateUser(id, user);
        history.push('/');
    };

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div className="p-field">
                    <label htmlFor="nomuser">Username</label>
                    <InputText id="nomuser" name="nomuser" value={user.nomuser} onChange={handleInputChange} />
                </div>
                <div className="p-field">
                    <label htmlFor="password">Password</label>
                    <InputText id="password" name="password" value={user.password} onChange={handleInputChange} type="password" />
                </div>
                <Button label="Save" type="submit" />
            </form>
        </div>
    );
};

export default EditUser;
