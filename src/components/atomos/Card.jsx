import { Card } from "@nextui-org/react";
const Cards = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};
export default Cards;