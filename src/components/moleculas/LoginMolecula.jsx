import { Link } from "react-router-dom";
import Input from "../atomos/Input";
import Lable from "../atomos/Label";
import MyButton from "../atomos/Button";
import Cards from "../atomos/Card";
import Cardheader from "../atomos/CardHeader";
import Cardbody from "../atomos/CardBody";
import { CardFooter } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../../store/api/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@nextui-org/spinner";
const LoginMolecula = () => {
  const [loginUser, { isSuccess, error }] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigate();
  const onSubmit = async (data) => {
    await loginUser(data);
  };
  useEffect(() => {
    if (isSuccess) {
      navigation("/home");
    }
  }, [isSuccess]);
  const errorMessage = error ? (
    <p className="text-red-400 flex">contraseña o usuario incorrectos</p>
  ) : null;
  return (
    <>
      <div className=" justify-center flex mt-8 items-center h-full ">
        <Cards
          className={
            "md:flex  md:w-[25%] min-w-fit pl-6 pb-6 pr-6  min-h-[25%] "
          }
        >
          <Cardheader className={"flex flex-col"}>
            <div className=" w-full justify-start">
              <h1 className="text-3xl font-[700]">Iniciar sesión</h1>
            </div>

            <p className="mt-2 font-[400]">
              Ingresa tu correo electrónico y contraseña para Ingresar a la
              tienda.
            </p>
          </Cardheader>
          <Cardbody className={"mt-10"}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <Lable>Correo Electronico</Lable>
                <Input
                  name="username"
                  placeholder="Maor0711"
                  register={register}
                  errors={errors}
                />
              </div>
              <div>
                <div className=" mt-3 flex gap-3 flex-row w-full  justify-between">
                  <Lable>Contraseña</Lable>
                  <Link className="underline">¿Olvidates tu Contraseña?</Link>
                </div>
                <Input name="password" register={register} errors={errors} />

                <MyButton type={"submit"}>Iniciar Sesion</MyButton>
              </div>
            </form>
          </Cardbody>
          <CardFooter className="flex flex-col">
            <div className=" flex flex-row justify-center gap-2 w-full">
              <span>¿No tienes una cuenta?</span>
              <Link className="underline">Regístrate</Link>
            </div>
            {errorMessage}
          </CardFooter>
        </Cards>
      </div>
    </>
  );
};
export default LoginMolecula;
