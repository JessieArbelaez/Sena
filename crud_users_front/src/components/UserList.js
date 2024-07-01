// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import userService from '../services/userService';

const UserList = ({ onEditUser, onDeleteUser }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await userService.getAllUsers();
        setUsers(data);
    };

    return (
        <div className="container mt-5">
            <h2>Usuarios</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>DNI</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.dni}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button className="btn btn-primary mr-2" onClick={() => onEditUser(user)}>Editar</button>
                                <button className="btn btn-danger" onClick={() => onDeleteUser(user._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
