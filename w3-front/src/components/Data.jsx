import { useContext, useEffect, useState } from "react";
import Context from "../store/Context";
import { VITE_API_URL } from "../config";
import Resaltar from "./ui/Resaltar";

const numberWithPoints = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Data = () => {
  const context = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        let busqueda = await fetch(
          `${VITE_API_URL}paises?nombre=${context.state.search}`
        );
        if (busqueda.ok) {
          if (busqueda.status === 204) {
            setData([]);
            return;
          }
          let json = await busqueda.json();
          setData(json);
          return;
        }
        setData(null);
      } catch (error) {
        setData(null);
        console.log(error);
      }
    };
    if (context.state.search.length > 0) {
      getData().finally(() => setLoading(false));
    } else {
      setData(null);
    }
  }, [context.state.search]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-[#179fc4] to-[#1dd38f] dark:from-[#179fc4] dark:to-[#1dd38f]dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              País
            </th>
            <th scope="col" className="px-6 py-3">
              Población
            </th>
            <th scope="col" className="px-6 py-3">
              % Pob.
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((d, index) => {
              return (
                <tr
                  key={`tr-${index}`}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Resaltar cadena={d.pais} valor={context.state.search} />
                  </th>
                  <td className="px-6 py-4 text-right">
                    {numberWithPoints(d.poblacion)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {parseFloat(d.porcentaje, 10).toFixed(2)} %
                  </td>
                </tr>
              );
            })
          ) : data && data.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center bg-blue-300 p-2">
                No se encontraron resultados para{" "}
                <strong className="text-gray-700">
                  {context.state.search}
                </strong>
                .
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan={3} className="text-center bg-yellow-200 p-2">
                Ingrese un valor para comenzar la búsqueda [mínimo 3
                caracteres].
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
