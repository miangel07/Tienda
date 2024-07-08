import Cards from "../moleculas/Cards";
import NarvbarMolecula from "../moleculas/NavbarMolecula";
import { useGetProductosQuery } from "../../store/api/productos";
import { Spinner } from "@nextui-org/spinner";
import { Pagination } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useAddCartMutation } from "../../store/api/carro";
import { useGetProductoByIdQuery } from "../../store/api/productos";

const HoneOrganismo = () => {
  const { data: productos, isLoading, isError } = useGetProductosQuery();

  //const [addCart, { isSuccess }] = useAddCartMutation();
  const [number, setNumber] = useState(null);

  const [cantidadData, setCantidadData] = useState(7);
  const [skeleton, setskeleton] = useState(Array(cantidadData).fill(null));
  const [page, setPage] = useState(1);

  const final = page * cantidadData;
  const inicial = final - cantidadData;

  const handlePageChange = (pagina) => {
    setPage(pagina);
  };

  const isData = productos ? productos.slice(inicial, final) : [];

  const handleClick = (numero) => {
    setNumber(numero);
  };

  const data = isData
    ? isData.map((product) => (
        <div key={product.id}>
          <Cards
            numero={product.id}
            titulo={product.title}
            precio={product.price}
            categoria={product.category}
            descripcion={product.description}
            imagen={product.image}
            onSelect={handleClick}
          />
        </div>
      ))
    : null;
  if (isError) {
    return <div>Error...</div>;
  }

  const loand = isLoading ? (
    <>
      <Spinner label="cargando..." color="warning" labelColor="defaul" />
      <div className=" flex-wrap flex gap-3 justify-center   w-full  lg:w-3/4 ">
        {skeleton.map((_, i) => (
          <div key={i}>
            <Cards>
              <Skeleton className="rounded-lg" />
            </Cards>
          </div>
        ))}
      </div>
    </>
  ) : (
    ""
  );
  return (
    <>
      <NarvbarMolecula numero={number} />

      <div className="flex justify-around flex-col  items-center bg">
        {loand}
        <div className=" flex-wrap flex gap-3 justify-center   bg-slate-400 w-full  lg:w-3/4 ">
          {data}
        </div>

        <div className="flex mt-10">
          <Pagination
            color="primary"
            onChange={(pagina) => handlePageChange(pagina)}
            showShadow
            total={3}
            initialPage={page}
          />
        </div>
      </div>
    </>
  );
};
export default HoneOrganismo;
