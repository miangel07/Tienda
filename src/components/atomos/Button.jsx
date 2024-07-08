import { Button } from "@nextui-org/react";

const MyButton = ({ children, type, onClick }) => {


  return (
    <Button
      type={type}
      onClick={() => {
        onClick()
      }}
      className={`w-full h-9 mt-3 rounded-lg bg-black text-white`}
    >
      {children}
    </Button>
  );
};

export default MyButton;
