// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import userService from '../services/userService';

const UserForm = ({ selectedUser, onSave }) => {
    const [user, setUser] = useState({ username: '', dni: '', name: '', phone: '' });

    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        } else {
            setUser({ username: '', dni: '', name: '', phone: '' });
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedUser) {
            await userService.updateUser(selectedUser._id, user);
        } else {
            await userService.createUser(user);
        }
        onSave();
    };

    return (
        <div className="container mt-5">
            <h2>{selectedUser ? 'Editar Usuario' : 'Crear Usuario'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>DNI</label>
                    <input
                        type="text"
                        className="form-control"
                        name="dni"
                        value={user.dni}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">Guardar</button>
            </form>
        </div>
    );
};

export default UserForm;
