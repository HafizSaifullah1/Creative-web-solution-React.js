import React from 'react'

function Login() {
  return (

    <div className="py-16 bg-orange-50 min-h-screen">
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
      {/* Image Section */}
      <div className="md:w-5/12 lg:w-5/12">
        <img
          src="https://img.freepik.com/premium-photo/login-concept-flat-cartoon-style-image-features-web-browser-interface_198565-11591.jpg?w=740"
          alt="Login Illustration"
          className="w-full object-cover"
        />
      </div>

      {/* Login Form Section */}
      <div className="md:w-7/12 lg:w-6/12 bg-white shadow-lg p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-orange-700 sm:text-5xl text-center mb-6">Welcome Back!</h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:ring-orange-500 focus:border-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:ring-orange-500 focus:border-orange-500"
              placeholder="********"
              required
            />
          </div>

          {/* Login Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-700 text-white font-medium rounded-md hover:bg-orange-800 focus:ring-4 focus:ring-orange-300"
            >
              Log in
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center">
            <a href="#" className="text-orange-600 hover:underline text-sm">
              Forgot your password?
            </a>
          </div>
        </form>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-300"></div>

        {/* Signup Link */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-orange-600 hover:underline font-medium">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login