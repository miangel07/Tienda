import React, { useEffect, useState } from "react";
import MyButton from "../atomos/Button";
import { Skeleton, Spinner } from "@nextui-org/react";
import { useGetProductoByIdQuery } from "../../store/api/productos";

const Cards = ({
  titulo,
  precio,
  categoria,
  descripcion,
  imagen,
  numero,
  onSelect,
  children,
}) => {
  const [number, setnumber] = useState(null);
  const [carrito, setCarrito] = useState(() => {
    const local = JSON.parse(localStorage.getItem("productos")) || [];
    return local;
  });
  const {
    data: product,
    error,
    isLoading,
    refetch,
  } = useGetProductoByIdQuery(number, {
    skip: number === null,
  });

  useEffect(() => {
    if (product) {
      let productosGuardados =
        JSON.parse(localStorage.getItem("productos")) || [];
      productosGuardados.push(product);
      localStorage.setItem("productos", JSON.stringify(productosGuardados));
    }
  }, [product]);

  const cargando = isLoading ? <Spinner /> : "";

  const childrens = children ? (
    <Skeleton className="w-3/5 rounded-lg">
      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
    </Skeleton>
  ) : null;

  const handleClick = async (numero) => {
    setnumber(numero);
    onSelect(numero);
  };

  return (
    <section
      className="mt-3 flex transition ease-in-out
      hover:-translate-y-3 hover:scale-105 rounded-lg justify-center pl-3 pr-3 flex-col h-[550px] w-[312px] cursor-pointer
      hover:shadow-2xl duration-500"
    >
      {cargando}
      <img className="w-[312px] h-[312px] cursor-pointer" src={imagen} />
      {childrens}
      <div className="flex flex-col">
        <h1 className="line-clamp-1">{titulo}</h1>
        <p> ${precio}</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p>Producto {numero}</p>
        <p className="line-clamp-2">{descripcion}</p>
        <p>{categoria}</p>
        <MyButton onClick={() => handleClick(numero)}>añadir al carro</MyButton>
      </div>
    </section>
  );
};

export default Cards;
