import useCount from '../hooks/useCount';

import Card from './Card';

const BackwardCounter = () => {
  const counter = useCount(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
