import React from "react";

const BidCard = ({ data }) => {
  const { title, description, upload_file, base_price } = data;
  return (
    <div className="md:w-80 w-72 h-1/2 bg-white rounded-lg">
      <img
        className="rounded-t-lg object-cover h-72 md:w-80 w-72"
        src={upload_file}
        alt={title}
      />

      <div className="p-5 border border-t-0 h-64 w-80">
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-medium text-xs text-gray-500">
          Starts at ${base_price}
        </p>

        <p className="mt-4 mb-3 font-normal text-gray-700 dark:text-gray-400 md:w-80 w-full h-24">
          {description.slice(0, 90)}...
        </p>
        <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-end">
          Learn more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </p>
      </div>
    </div>
  );
};

export { BidCard };
