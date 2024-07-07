import { useState } from 'react';

export default function useCollapse() {
  const [collapse, setCollapse] = useState(true);
  const visible = collapse ? 'hidden' : '';

  const onSetCollapse = () => setCollapse(!collapse);

  const sales = { collapse, onSetCollapse, visible };
  const products = { collapse, onSetCollapse, visible };

  return { visible, sales, products };
}
