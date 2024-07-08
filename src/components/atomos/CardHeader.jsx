import { CardHeader } from "@nextui-org/react";
const Cardheader = ({ children, ...props }) => {
  return <CardHeader {...props}>{children}</CardHeader>;
};
export default Cardheader;