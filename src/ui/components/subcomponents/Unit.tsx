import { FC, ReactElement } from 'react';

interface Props {
  unit: string;
}

const Unit: FC<Props> = ({ unit }: Props): ReactElement => {
  return <span>{unit}</span>;
};

export default Unit;
