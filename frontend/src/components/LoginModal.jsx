
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

const LoginModal = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authState, setAuthState] = useState(true); 
    const {login,signup}=useAuth()

    const handleLogin = async() => {
        // Handle login logic here
        await login({email,password})
        onClose();
    };

    const handleAuth = (id) => {
        if (id === "login") {
            setAuthState(true);
        } else {
            setAuthState(false);
        }
    };

    const handleSignup=async()=>{
        await signup({email,password})
        setAuthState(true)

    }

    const handleForgotPassword = () => {
        // Handle forgot password logic here
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

                <div className="modal-container bg-white w-96 mx-auto rounded-lg shadow-lg z-50 text-black">
                    <div className="flex justify-center items-center rounded-lg">
                        <button onClick={() => handleAuth("login")} className="flex-1 text-center text-2xl font-semibold  text-black uppercase hover:bg-gray-300 px-4 py-4">Login</button>
                        <button onClick={() => handleAuth("signup")} className="flex-1 text-center text-2xl font-semibold  text-black uppercase hover:bg-gray-300 px-4 py-4">Signup</button>
                    </div>
                    {authState ? (
                        <>
                            <div className="border-black border-bottom border-2 w-full mb-2"></div>
                            <div className="modal-content py-4 text-left px-6 relative">

                                <FaTimes
                                    size={30}
                                    className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-red-500"
                                    onClick={onClose}
                                />

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                  </label>
                                    <input
                                        className="w-full border rounded py-2 px-3"
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                  </label>
                                    <input
                                        className="w-full border rounded py-2 px-3"
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
                                        onClick={handleLogin}
                                    >
                                        Login
                  </button>
                                    <button
                                        className="text-blue-500 hover:underline"
                                        onClick={handleForgotPassword}
                                    >
                                        Forgot Password?
                  </button>
                                </div>
                            </div>
                        </>
                    ) : (
                            <>
                                <div className="border-black border-bottom border-2 w-full mb-2"></div>
                                <div className="modal-content py-4 text-left px-6 relative">

                                    <FaTimes
                                        size={30}
                                        className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-red-500"
                                        onClick={onClose}
                                    />

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                            Email
                  </label>
                                        <input
                                            className="w-full border rounded py-2 px-3"
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                            Password
                  </label>
                                        <input
                                            className="w-full border rounded py-2 px-3"
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
                                            onClick={handleSignup}
                                        >
                                            Sigup
                  </button>

                                    </div>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </>
    );
};

export default LoginModal;
