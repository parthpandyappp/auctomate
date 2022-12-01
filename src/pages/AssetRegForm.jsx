import uuid from "react-uuid";
import { useState } from "react";

const AssetRegForm = () => {
  const initData = {
    title: "",
    reg_ref: uuid(),
    is_using_ai: false,
    category: "",
    bid_type: "Minimum Bid Auction",
    base_price: 0,
    upload_file: undefined,
    start_date: "",
    end_date: "",
    other_category: "",
    description: "",
  };
  const [formData, setFormData] = useState(initData);

  const {
    title,
    reg_ref,
    is_using_ai,
    category,
    bid_type,
    base_price,
    upload_file,
    start_date,
    end_date,
    other_category,
    description,
  } = formData;

  console.log(formData);

  return (
    <form
      className="grow bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4 w-full max-w-3xl mx-auto md:max-w-xl"
      action="submit"
    >
      <h2 className="underline underline-offset-3 text-center text-2xl mb-6 font-bold">
        Asset Registration Form
      </h2>

      <div className="mb-4">
        <label htmlFor="reg_ref" className="block text-gray-500 font-bold mb-2">
          Recognition reference
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:none cursor-not-allowed border-gray-600 placeholder-gray-400 text-gray-400 focus:none bg-gray-100"
          id="reg_ref"
          name="reg_ref"
          value={reg_ref}
          readOnly
          disabled
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-500 font-bold mb-2">
          Asset title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          required
        />
      </div>

      <div className="flex-row flex-wrap mb-4">
        <label
          className="block text-gray-500 font-bold mb-2"
          htmlFor="bid_type"
        >
          Select bid type
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-light focus:outline-none focus:shadow-outline "
          name="bid_type"
          value={bid_type}
          id="bid_type"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        >
          <option value="Minimum-bid-auction">Minimum Bid Auction</option>
          <option value="Sealed-bid-auction">Sealed Bid Auction</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-500 font-bold mb-2"
        >
          Asset description
        </label>
        <textarea
          id="description"
          name="description"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          value={description}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="start_date"
          className="block text-gray-500 font-bold mb-2"
        >
          Start date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          id="start_date"
          name="start_date"
          type="date"
          value={start_date}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="end_date"
          className="block text-gray-500 font-bold mb-2"
        >
          End date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          id="end_date"
          name="end_date"
          type="date"
          value={end_date}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="upload_file"
          className="block text-gray-500 font-bold mb-2"
        >
          Upload asset image
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          id="upload_file"
          name="upload_file"
          type="file"
          value={upload_file}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          required
        />
      </div>

      <div className="mb-6 mt-6">
        <label
          htmlFor="is_using_ai"
          className="block text-gray-500 font-bold mb-2"
        >
          Opt-in for AuctoMate's AI powered price optimisation algorithm?
        </label>
        <div className="flex items-center mb-4">
          <input
            id="is_using_ai"
            name="is_using_ai"
            type="checkbox"
            value={is_using_ai}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: !is_using_ai })
            }
            checked={is_using_ai}
          />
          <label
            htmlFor="is_using_ai"
            className="ml-2 text-sm font-base text-gray-400"
          >
            I agree opt-in for using auctomate's AI powered price optimisation
            algorithm, while doing so I commit that I'll abide by the mentioned
            rules and terms of usage.
          </label>
        </div>
      </div>

      {is_using_ai && (
        <div className="flex-row flex-wrap mb-4">
          <label
            className="block text-gray-500 font-bold mb-2"
            htmlFor="category"
          >
            Asset category
          </label>
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-light focus:outline-none focus:shadow-outline "
            name="category"
            value={category}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            id="category"
          >
            <option value="real_estate">Real Estate</option>
            <option value="vehicles">Vehicles</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}

      {!is_using_ai && (
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold mb-2"
            htmlFor="base_price"
          >
            Base price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
            id="base_price"
            name="base_price"
            type="text"
            value={base_price}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
      )}

      {category === "other" && (
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold mb-2"
            htmlFor="other_category"
          >
            Other
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
            id="other_category"
            name="other_category"
            type="text"
            value={other_category}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
      )}

      <div className="flex items-center justify-center">
        <button
          className="bg-slate-800 text-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  m-6"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export { AssetRegForm };
