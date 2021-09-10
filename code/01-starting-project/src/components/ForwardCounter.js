import useCount from '../hooks/useCount';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCount();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
