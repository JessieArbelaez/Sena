// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importamos BrowserRouter, Routes y Route
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import About from './components/About';
import userService from './services/userService';

const App = () => {
    const [selectedUser, setSelectedUser] = React.useState(null);

    const handleEditUser = (user) => {
        setSelectedUser(user);
    };

    const handleDeleteUser = async (id) => {
        await userService.deleteUser(id);
        window.location.reload();
    };

    const handleSave = () => {
        setSelectedUser(null);
        window.location.reload();
    };

    return (
        <Router>
            <div className="container">
                <h1 className="mt-5">Gestión de Usuarios</h1>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Usuarios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Sobre Nosotros</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path="/" element={<>
                        <UserForm selectedUser={selectedUser} onSave={handleSave} />
                        <UserList onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} />
                    </>} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
