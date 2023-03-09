import uuid from "react-uuid";
import React, { useState } from "react";
import { bids } from "../states";
import { useRecoilState } from "recoil";
import axios from "axios";
import { sampleData } from "../assets/data/sampledata";
import { MdClose } from "react-icons/md";
import _ from "lodash";

const AssetRegForm = () => {
  const initData = {
    _id: uuid(),
    title: "",
    is_using_ai: false,
    category: "real_esatae",
    bid_type: "Minimum Bid Auction",
    base_price: 0,
    upload_file: "",
    start_date: "",
    real_sub_category: "select",
    end_date: "",
    other_category: "",
    description: "",
    totalsq_ft: 0,
    area_name: "",
    bhk: "",
    nwb: "",
    year_bought: "",
  };

  const [formData, setFormData] = useState(initData);
  const [bidsData, setBidsData] = useRecoilState(bids);
  const [generatedBasePrice, setGeneratedBasePrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const {
    _id,
    title,
    is_using_ai,
    category,
    bid_type,
    base_price,
    upload_file,
    real_sub_category,
    start_date,
    end_date,
    other_category,
    description,
    totalsq_ft,
    area_name,
    bhk,
    nwb,
    year_bought,
  } = formData;

  var payload, featureDataSelection;

  const initialSubmission = (e) => {
    if (e.target.type === "button") {
      setShowModal(true);
      if (real_sub_category === "plot-land") {
        console.log("Land entry selected");
        if (parseInt(formData["totalsq_ft"]) <= 5000) {
          featureDataSelection = sampleData[1];
        } else if (
          parseInt(formData["totalsq_ft"]) > 5000 &&
          parseInt(formData["totalsq_ft"]) < 12000
        ) {
          featureDataSelection = sampleData[2];
        } else {
          featureDataSelection = sampleData[0];
        }

        payload = {
          ...featureDataSelection,
          LotArea: formData["totalsq_ft"],
          YearBuilt: formData["year_bought"],
          YearRemodAdd: formData["year_bought"],
        };
      } else {
        if (parseInt(formData["totalsq_ft"]) <= 5000) {
          featureDataSelection = sampleData[1];
        } else if (
          parseInt(formData["totalsq_ft"]) > 5000 &&
          parseInt(formData["totalsq_ft"]) < 12000
        ) {
          featureDataSelection = sampleData[2];
        } else {
          featureDataSelection = sampleData[0];
        }

        payload = {
          ...featureDataSelection,
          LotArea: formData["totalsq_ft"],
          YearBuilt: formData["year_bought"],
          YearRemodAdd: formData["year_bought"],
        };
      }
      (async () => {
        const res = await axios.post(
          "http://localhost:5000/real-estate-land",
          payload
        );
        const nfObject = new Intl.NumberFormat("en-US");
        setGeneratedBasePrice(nfObject.format(parseInt(res.data) * 80));
        setFormData({ ...formData, base_price: parseInt(res.data) * 80 });
        console.log("RESPONSE: ", res);
      })();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submission: ", { ...formData, payload });
    if (is_using_ai) {
      const bidData = [...bidsData, { ...formData, payload }];
      const uniqueObj = _.uniqWith(bidData.reverse(), (arrVal, othVal) => {
        return _.isEqual(_.pick(arrVal, ["_id"]), _.pick(othVal, ["_id"]));
      });
      setBidsData(uniqueObj);
      setShowModal(false);
    } else {
      const bidData = [...bidsData, ...formData];
      const uniqueObj = _.uniqWith(bidData.reverse(), (arrVal, othVal) => {
        return _.isEqual(_.pick(arrVal, ["_id"]), _.pick(othVal, ["_id"]));
      });
      setBidsData(uniqueObj);
    }

    setFormData(initData);
  };

  console.log(formData);
  console.log("BIDS: ", bidsData);

  return (
    <form
      className="grow bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-4 w-full max-w-3xl mx-auto md:max-w-xl"
      onSubmit={handleSubmit}
    >
      <h2 className="underline underline-offset-3 text-center text-2xl mb-6 font-bold">
        Asset Registration Form
      </h2>

      <div className="mb-4">
        <label htmlFor="_id" className="block text-gray-500 font-bold mb-2">
          Recognition reference
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:none cursor-not-allowed border-gray-600 placeholder-gray-400 text-gray-400 focus:none bg-gray-100"
          id="_id"
          name="_id"
          value={_id}
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
          accept="image/*"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.files[0] })
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
            <option value="select">select a category</option>
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

      {is_using_ai && category === "real_estate" && (
        <div className="flex-row flex-wrap mb-4">
          <label
            className="block text-gray-500 font-bold mb-2"
            htmlFor="real_sub_category"
          >
            Provide specific category in Real estate
          </label>
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-light focus:outline-none focus:shadow-outline "
            name="real_sub_category"
            value={real_sub_category}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            id="category"
          >
            <option value="select">select a sub-category</option>
            <option value="housing">Housing</option>
            <option value="plot-land">Land/Plot</option>
          </select>
        </div>
      )}

      {is_using_ai && real_sub_category === "plot-land" && (
        <React.Fragment>
          <div className="mb-4">
            <label
              htmlFor="totalsq_ft"
              className="block text-gray-500 font-bold mb-2"
            >
              Total Square Feet
            </label>
            <input
              id="totalsq_ft"
              name="totalsq_ft"
              type="number"
              value={totalsq_ft}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="area_name"
              className="block text-gray-500 font-bold mb-2"
            >
              Landmark/Area name
            </label>
            <input
              id="area_name"
              name="area_name"
              type="text"
              value={area_name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="area_name"
              className="block text-gray-500 font-bold mb-2"
            >
              Year bought
            </label>
            <input
              id="year_bought"
              name="year_bought"
              type="text"
              value={year_bought}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
        </React.Fragment>
      )}

      {real_sub_category === "housing" && (
        <React.Fragment>
          <div className="mb-4">
            <label
              htmlFor="totalsq_ft"
              className="block text-gray-500 font-bold mb-2"
            >
              Total Square Feet
            </label>
            <input
              id="totalsq_ft"
              name="totalsq_ft"
              type="number"
              value={totalsq_ft}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="area_name"
              className="block text-gray-500 font-bold mb-2"
            >
              Landmark/Area name
            </label>
            <input
              id="area_name"
              name="area_name"
              type="text"
              value={area_name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bhk" className="block text-gray-500 font-bold mb-2">
              No. of BHK
            </label>
            <input
              id="bhk"
              name="bhk"
              type="text"
              value={bhk}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nwb" className="block text-gray-500 font-bold mb-2">
              No. of Washroom/bathroom
            </label>
            <input
              id="nwb"
              name="nwb"
              type="text"
              value={nwb}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-light focus:outline focus:shadow-outline"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
        </React.Fragment>
      )}

      <div className="flex items-center justify-center">
        <button
          className="bg-slate-800 text-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  m-6"
          type={is_using_ai ? "button" : "submit"}
          onClick={(e) => initialSubmission(e)}
        >
          Submit
        </button>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center min-h-screen bg-blue-100 bg-opacity-60">
          <div className="border-2 border-slate-600 w-1/4 p-3 rounded-md bg-blue-100">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span></span>
                <MdClose
                  className="text-xl text-gray-600 cursor-pointer ml-3 text-right"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <h1 className="text-lg font-base">
                Auctomatic generated sale price of your asset is{" "}
                <span className="font-bold">{`Rs. ${generatedBasePrice}`}</span>
                , do you want to use it or prefer the entry manually?
              </h1>
            </div>

            <div className="flex mt-5 gap-2">
              <button
                type="submit"
                className="text-white text-center w-full py-1 bg-blue-600 rounded"
              >
                Auctomatic
              </button>
              <button
                type="button"
                className="text-white text-center w-full py-1 bg-red-600 rounded"
              >
                Manually
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export { AssetRegForm };
// https://pastebin.com/ubS247Dp
