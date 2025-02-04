import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold text-center mb-4">Login</h2>
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
      <button className="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600">
        Login
      </button>
    </div>
  )
}

export default Login
