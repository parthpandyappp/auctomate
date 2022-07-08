const AssetRegForm = () => {
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4 w-full max-w-3xl mx-auto md:max-w-xl"
      action="submit"
    >
      <h2 className="text-center text-2xl mb-6 font-bold">
        Asset Registration Form
      </h2>

      <div className="mb-4">
        <label for="item_number" className="block text-gray-500 font-bold mb-2">
          Auction Item Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          id="item_number"
          name="Item-number"
          type="number"
          required
        />
      </div>

      <div className="mb-4">
        <label for="bid_title" className="block text-gray-500 font-bold mb-2">
          Bid Title
        </label>
        <input
          id="base_title"
          name="base_title"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          required
        />
      </div>

      <div className="flex-row flex-wrap mb-4">
        <label className="block text-gray-500 font-bold mb-2" for="bid_type">
          Select Bid Type
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-light focus:outline-none focus:shadow-outline "
          name="bid-list"
          id="bid_type"
        >
          <option value="Minimum-bid-auction">
            Minimum Bid Auction required
          </option>
          <option value="Sealed-bid-auction">Sealed Bid Auction</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-500 font-bold mb-2" for="base_price">
          Base Price
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          id="base_price"
          name="base_price"
          type="text"
          required
        />
      </div>

      <div className="mb-4">
        <label
          for="product_desc"
          className="block text-gray-500 font-bold mb-2"
        >
          Product Description
        </label>
        <textarea
          id="base_price"
          name="base_price"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label for="start_date" className="block text-gray-500 font-bold mb-2">
          Mention Start Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          id="start_date"
          name="start_date"
          type="date"
          required
        />
      </div>

      <div className="mb-4">
        <label for="end_date" className="block text-gray-500 font-bold mb-2">
          Mention End Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          id="end_date"
          name="end_date"
          type="date"
          required
        />
      </div>

      <div className="mb-4">
        <label for="upload" className="block text-gray-500 font-bold mb-2">
          Upload Image
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          id="upload"
          name="upload"
          type="file"
          required
        />
      </div>

      <div className="flex-row flex-wrap mb-4">
        <label className="block text-gray-500 font-bold mb-2" for="bid_type">
          Select Category
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-light focus:outline-none focus:shadow-outline "
          name="bid-list"
          id="bid_type"
        >
          <option value="real_estate">Real Estate</option>
          <option value="vehicles">Vehicles</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label for="other" className="block text-gray-500 font-bold mb-2">
          Other
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
          id="upload"
          name="upload"
          type="text"
          required
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          className="bg-slate-800 text-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export { AssetRegForm };
