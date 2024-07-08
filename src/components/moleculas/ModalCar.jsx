import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from "@nextui-org/react";

import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import Span from "../atomos/Span";

const ModalCar = ({ visible, onClose }) => {
  const [carrito, setCarrito] = useState(() => {
    const carritoLocal = JSON.parse(localStorage.getItem("productos")) || [];
    return carritoLocal;
  });
  const [contador, setcontador] = useState(1);
  const [suma, setSuma] = useState(0);
  const [resta, setresta] = useState(0);

  const hadeldrop = (id) => {
    const nuevosProductos = carrito.filter((prod) => prod.id !== id);
    localStorage.setItem("productos", JSON.stringify(nuevosProductos));
    setCarrito(nuevosProductos);
  };

  useEffect(() => {
    if (visible) {
      const carritoLocal = JSON.parse(localStorage.getItem("productos")) || [];
      setCarrito(carritoLocal);
    }
    const cart = JSON.parse(localStorage.getItem("productos"));
    if (cart < 1) {
      localStorage.clear();
    }
  }, [visible]);
  const handlesubTract = (id) => {
    if (contador > 1) {
      setcontador(contador - 1);
      let restaId = contador / 2;
      setresta(restaId);
      console.log(resta);
    }
  };

  const hadleAdd = (id) => {
    setcontador(contador + 1);
    let buscaProducto = carrito.find((element) => element.id === id);
    const precio = buscaProducto.price;
    const sumaprecio = precio * contador;
    setSuma(sumaprecio);
    console.log("del suma", suma);
  };

  const listar =
    carrito.length > 0 ? (
      carrito.map((producto) => (
        <div
          key={producto.id}
          className="w-[452px] h-[82px] rounded-lg border-2 flex flex-row md:justify-between"
        >
          <div className="w-[82px] h-[82px] rounded-lg">
            <img src={producto.image} alt={producto.title} />
          </div>
          <div className="flex flex-col ml-2 justify-evenly">
            <span className="line-clamp-1">{producto.title}</span>
            <span>${producto.price}</span>
          </div>
          <div className="justify-center items-center flex flex-row gap-3 pr-2">
            <Span>
              <GrFormSubtract
                size={20}
                onClick={() => {
                  handlesubTract(producto.id);
                }}
              />
            </Span>
            <span>{contador}</span>
            <Span>
              <IoMdAdd
                size={20}
                onClick={() => {
                  hadleAdd(producto.id);
                }}
              />
            </Span>
            <Span>
              <RiDeleteBinLine
                size={15}
                onClick={() => hadeldrop(producto.id)}
              />
            </Span>
          </div>
        </div>
      ))
    ) : (
      <h1>no hay productos en el carrito </h1>
    );

  return (
    <Modal
      size={"5xl"}
      isOpen={visible}
      onClose={() => {
        onClose();
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 items-center">
          <p>Carrito de compras</p>
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-wrap gap-4 justify-between">{listar}</div>
        </ModalBody>
        <ModalFooter className=" justify-center  flex  flex-col items-center ">
          <div className=" rounded-lg bg-slate-200 shadow-2xl flex-col flex w-[420px]  h-[250px] mt-8 pl-4 pr-4">
            <h1 className="w-full  justify-center flex mt-5">
              Resumen del pedido
            </h1>
            <div className="flex flex-col gap-2 mt-5 ">
              <div className="flex justify-between flex-row">
                <p>Subtotal:</p> <p>$</p>
              </div>
              <div className="flex justify-between flex-row">
                <p>Descuento:</p> <p>$</p>
              </div>
              <div className=" border-b-1.5 w-full mt-2 border-gray-400 "></div>
              <div className="flex justify-between flex-row">
                <p>Total:</p> <p>$</p>
              </div>
            </div>
          </div>
          <div className="flex-wrap flex gap-3">
            <Button
              color="success"
              variant="shadow"
              className="text-white"
              onClick={() => {
                onClose();
              }}
            >
              Finalizar Compra
            </Button>
            <Button
              color="primary"
              variant="shadow"
              onClick={() => {
                onClose();
              }}
            >
              Seguir comprando
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCar;
