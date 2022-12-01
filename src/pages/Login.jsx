import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const initialVals = { email: "", password: "", rememberme: false };
  const [credentials, setCredentials] = useState(initialVals);

  return (
    <div className="mx-auto my-5 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg md:shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 grow">
      <form className="space-y-6  text-center" action="#">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">
          AuctoMate | Signin
        </h5>
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                [e.target.name]: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                [e.target.name]: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="flex items-start mb-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                checked={credentials.rememberme}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    rememberme: !credentials.rememberme,
                  })
                }
                required
              />
            </div>
            <label
              for="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <p className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
            Lost Password?
          </p>
        </div>
        <button
          type="submit"
          className="bg-slate-800 text-white hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link
            to="/auth/signup/"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export { Login };
