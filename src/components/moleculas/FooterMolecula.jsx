import React from "react";
import { FaGithub } from "react-icons/fa";
import Lista from "../atomos/Lista";

const FooterMolecula = () => {
    const itmes = ["Politica de Privacidad ", "Terminos y servicios","Sobre nosotros ","Contactos"];
    const itmesCopy = ["\u00A9 2024 Todos los derechos reservados.", "Diseñado Por Miguel Osorio",<FaGithub className={"size-6 cursor-pointer"}/>,"Con fines educativos"];
    
  return (
    <section className="bg-black w-full md:h-28 h-36 flex md:flex-row flex-col justify-around gap-2 ">
        <div className=" flex items-center   flex-wrap"> 
        <Lista itmes={itmes} className={"text-white flex flex-wrap gap-4  "} />
        </div>
        <div className="  items-center flex  flex-wrap">
        <Lista itmes={itmesCopy} className={"text-white flex flex-row gap-4"} />
        </div>
  
    </section>
  );
};

export default FooterMolecula;
