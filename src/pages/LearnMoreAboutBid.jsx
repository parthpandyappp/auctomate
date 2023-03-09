import ReactEcharts from "echarts-for-react";
import peterchair from "../mock data/bid-assets/peterchair.jpeg";

export const LearnMoreAboutBid = () => {
  const option = {
    title: {
      text: "Latest trends",
      x: "right",
    },
    xAxis: {
      name: "Price",
      type: "category",
      data: ["100", "200", "300", "400", "500", "600"],
      axisLabel: {
        formatter: "{value}$",
      },
    },
    yAxis: {
      name: "People interested",
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 147, 260],
        type: "line",
      },
    ],
  };

  const option2 = {
    title: {
      text: "Participation from different countries",
      x: "right",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "8%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },

        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "India" },
          { value: 500, name: "UAE" },
          { value: 960, name: "USA" },
          { value: 1000, name: "United Kingdom" },
          { value: 100, name: "Canada" },
        ],
      },
    ],
  };
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-3/4 h-48 object-cover object-center rounded"
              src={peterchair}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Peter Kabuki's chair
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">
                Peter Kabuki's chair is a true masterpiece of design, skillfully
                crafted with meticulous attention to detail. The chair's refined
                contours and luxurious finish exude an air of sophistication and
                refinement. Its ergonomic shape and plush seating offer
                unparalleled comfort, making it the perfect addition to any
                modern living space or office. Whether you're lounging, working,
                or simply admiring its beauty, Peter Kabuki's chair is sure to
                impress.
              </p>
              <div className="flex mt-6 items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Base Price: $58.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Place Order
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden lg:w-4/5 mx-auto">
        <div className="container px-5 py-12 mx-auto">
          <h2 className="text-3xl font-bold">Insights</h2>
          <div className="flex flex-col md:flex-row justify-center">
            <div style={{ width: "50%" }}>
              <ReactEcharts option={option} />
            </div>
            <div style={{ width: "50%" }}>
              <ReactEcharts option={option2} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
