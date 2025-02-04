import React from 'react'

const Register = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold text-center mb-4">Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
      />
      <button className="bg-green-500 text-white rounded-md px-4 py-2 w-full hover:bg-green-600">
        Register
      </button>
    </div>
  )
}

export default Register
