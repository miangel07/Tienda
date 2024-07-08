import FooterMolecula from "../moleculas/FooterMolecula";
import LoginMolecula from "../moleculas/LoginMolecula";

const LoginOrganismo = () => {
  return (
    <>
      <section className="items-center justify-between h-screen   flex flex-col ">
        <LoginMolecula />
        <div className="w-full items-center">
          <FooterMolecula />
        </div>
      </section>
    </>
  );
};
export default LoginOrganismo;
