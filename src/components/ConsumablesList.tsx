import * as React from 'react';

import Consumable from '../classes/Consumable';
import ConsumableElement from './ConsumableElement';

type Props = {
  consumables: Consumable[];
};

const consumableElements: (consumables: Consumable[]) => JSX.Element[] = x =>
  x.map(c => <ConsumableElement key={c.uid} consumable={c} />);

const ConsumablesList: React.FunctionComponent<Props> = ({ consumables }) => {
  return <div>{consumableElements(consumables)}</div>;
};

export default ConsumablesList;
