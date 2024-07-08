import { CardBody } from "@nextui-org/react";
const  Cardbody = ({ children, ...props }) => {
    return <CardBody {...props}>{children}</CardBody>;
}
export default Cardbody;