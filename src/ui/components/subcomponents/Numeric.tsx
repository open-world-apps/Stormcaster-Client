import { FC, ReactElement, useState } from 'react';

import TempConverter from '../../../util/converters/TempConverter';

interface Props {
  value: number;
}

const Numeric: FC<Props> = ({ value }): ReactElement => {
  const converter = new TempConverter();

  return (
    <div>
      <span>{value}</span>
    </div>
  );
};

export default Numeric;
