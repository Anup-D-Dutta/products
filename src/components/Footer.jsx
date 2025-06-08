import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
            © {new Date().getFullYear()} Fake Store. All rights reserved.
        </footer>
    )
}

export default Footer
