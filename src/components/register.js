import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            setError('All fields are required!');
            return;
        }

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Registration successful!');
                console.log(data);
                setFormData({ name: '', email: '', password: '' });
                setError('');
            })
            .catch((err) => {
                console.error('Error registering user:', err);
                setError('Something went wrong. Please try again.');
            });
    };

    return (
        <div className='register-container'>
            <h1>Register:</h1>
            <form onSubmit={handleSubmit} className='register-form'>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit">Register</button>
            </form>

            <footer>
            <p>&copy; 2024 All rights reserved.</p>
        </footer>
        </div>
    );
};

export default Register;