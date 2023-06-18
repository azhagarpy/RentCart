// LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();

            // Make the login request to the Django API
            axios
                .post('/api-token-auth/', { username, password })
                .then((response) => {
                    const token = response.data.token;

                    // Store the token in local storage
                    localStorage.setItem('token', token);

                    // Optionally, you can redirect the user or perform any other actions
                    console.log('Login successful');
                })
                .catch((error) => {
                    console.error(error);
                    // Handle login error
                });
        };

        return ( <
                form onSubmit = { handleSubmit } >
                <
                input type = "text"
                value = { username }
                onChange = {
                    (e) => setUsername(e.target.value)
                }
                placeholder = "Username" / >
                <
                input type = "password"
                value = { password }
                onChange = {
                    (e) => setPassword(e.target.value)
                }
                placeholder = "Password" / >
                <
                button type = "submit" > Login < /button>