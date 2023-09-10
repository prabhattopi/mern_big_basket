import React, { useState } from 'react'
import LoginModal from './LoginModal'

const Login = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => {
        setIsOpen(false)
    }
    return (
        <>
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(true)}>
                <span className="uppercase">Login</span>

            </button>
            {
                isOpen && <LoginModal onClose={onClose} />
            }

        </>
    )
}

export default Login
