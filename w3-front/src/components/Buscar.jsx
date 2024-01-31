import { useContext, useState } from "react";
import Context from "../store/Context";
import { NEW_SEARCH } from "../store/constantes";

const Buscar = () => {
  const context = useContext(Context);
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    context.dispatch({ type: NEW_SEARCH, payload: search });
  };

  return (
    <div>
      <form
        className="flex justify-center items-center gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="nombre"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            País
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                fill="currentColor"
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
            </div>
            <input
              type="text"
              id="nombre"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Rusia"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 text-white bg-gray-700 hover:text-[#1dd48e] focus:ring-4 focus:outline-none  focus:ring-[#1dd38f] font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 stroke-gray-500 fill-none hover:text-[#1dd48e]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </form>
    </div>
  );
};

export default Buscar;
