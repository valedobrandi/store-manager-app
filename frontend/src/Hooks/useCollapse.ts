import { useState } from 'react';

export default function useCollapse() {
  const [collapse, setCollapse] = useState(true);
  const visible = collapse ? 'hidden' : '';

  return { visible, collapse, setCollapse };
}
