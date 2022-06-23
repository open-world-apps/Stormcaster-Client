import { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";

import { selectTemp } from "../../../redux/reducers/weatherSlice";

const Temperature: FC = (): ReactElement => {
  return <Container>{selectTemp}</Container>;
};

export default Temperature;
