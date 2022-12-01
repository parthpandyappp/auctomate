import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const initialVals = {
    email: "",
    password: "",
    pan_id: "",
    confirm_pass: "",
    upload_file: "",
    fname: "",
    lname: "",
    accept_rules: false,
  };

  const [credentials, setCredentials] = useState(initialVals);

  return (
    <div className="mx-auto my-5 w-1/2  p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 grow">
      <form className="space-y-6  text-center" action="#">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">
          AuctoMate | Signup
        </h5>
        <div className="flex justify-around gap-2">
          <div>
            <label
              for="fname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="tracking-widest bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Kumar"
              value={credentials.fname}
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
              for="lname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="tracking-widest bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Sangakara"
              value={credentials.lname}
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
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="tracking-widest bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-1/2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-full"
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
          <div className="w-1/2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirm_pass"
              id="confirm_pass"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-full"
              value={credentials.confirm_pass}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-1/2">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              PAN ID
            </label>
            <input
              type="text"
              name="pan_id"
              id="pan_id"
              placeholder="FRYXX85745"
              maxLength={10}
              className="tracking-widest bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-full"
              value={credentials.pan_id}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="w-2/3">
            <label
              for="passport_pic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
            >
              Passport size picture
            </label>
            <input
              type="file"
              name="upload_file"
              id="upload_file"
              placeholder="FRYXX85745"
              maxLength={10}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-full"
              value={credentials.upload_file}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="accept_rules"
            name="accept_rules"
            type="checkbox"
            className="self-start mt-0.5 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) =>
              setCredentials({
                ...credentials,
                accept_rules: !credentials.accept_rules,
              })
            }
          />
          <label
            htmlFor="accept_rules"
            className="ml-2 text-sm font-base text-gray-400 text-left"
          >
            By creating an account you agree to the Terms and Privacy policy.
            Please accept Terms and Privacy policy to continue.
          </label>
        </div>

        <button
          type="submit"
          className={`bg-slate-800 text-white text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline  ${
            credentials.accept_rules
              ? "hover:bg-blue-700"
              : "cursor-not-allowed disabled:opacity-50"
          } `}
          disabled={!credentials.accept_rules}
        >
          Signup
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already registered?{" "}
          <Link
            to="/auth/login/"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export { Signup };
