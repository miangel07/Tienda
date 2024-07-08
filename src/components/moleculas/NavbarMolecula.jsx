import React, { useState } from "react";
import { SiThemighty } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { removeCookie } from "../../utils";
import { useNavigate } from "react-router-dom";
import ModalCar from "./ModalCar";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

const NarvbarMolecula = ({ numero }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavigate();
  const [numeroCarrito, setNumeroCarrito] = useState(numero);

  const handleOpenModal = (numero) => {
    setNumeroCarrito(numero);

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const exit = () => {
    removeCookie("token");
    navigation("/");
  };

  return (
    <>
      <ModalCar
        visible={isModalOpen}
        onClose={handleCloseModal}
        numero={numeroCarrito}
      />
      <Navbar>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <div className="flex flex-row  items-center">
              <span>
                <SiThemighty />
              </span>
              <p className="hidden sm:block font-bold text-inherit">AOR</p>
            </div>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link color="foreground" href="#">
                Ropa
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="secondary">
                Joyas
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Electrodomesticos
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            type="search"
          />
          <div className="flex flex-row gap-4  items-center">
            <div>
              <FaShoppingCart
                className="size-8 cursor-pointer"
                onClick={() => handleOpenModal(numero)}
              />
            </div>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem
                  key="profile"
                  className="h-14 gap-2"
                  textValue="Signed in as zoey@example.com"
                >
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings" textValue="Administrar usuarios">
                  Administrar usuarios
                </DropdownItem>
                <DropdownItem key="team_settings" textValue="Team Settings">
                  Team Settings
                </DropdownItem>
                <DropdownItem key="analytics" textValue="Analytics">
                  Analytics
                </DropdownItem>
                <DropdownItem key="system" textValue="System">
                  System
                </DropdownItem>
                <DropdownItem key="configurations" textValue="Configurations">
                  Configurations
                </DropdownItem>
                <DropdownItem
                  key="help_and_feedback"
                  textValue="Help & Feedback"
                >
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger" textValue="Salir">
                  <div
                    className="flex flex-row justify-between items-center "
                    onClick={() => exit()}
                  >
                    <p>salir</p>
                    <IoExitOutline />
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NarvbarMolecula;
