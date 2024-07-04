import { useState } from 'react';

export default function useFormState() {
  const [productForm, setProductForm] = useState({
    name: '',
    id: '',
  });

  const [saleItems, setSaleItems] = useState<
  { saleItems: { productId: string, quantity: string }[] }
  >({ saleItems: [] });

  const [saleForm, setSaleForm] = useState({
    productId: '',
    quantity: '',
  });

  const itemsList = saleItems.saleItems;

  const updateProductForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setProductForm({ ...productForm, [target.name]: target.value });
  };

  const updateSaleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setSaleForm({ ...saleForm, [target.name]: target.value });
  };

  const addSaleItem = () => {
    setSaleItems({ saleItems: [...saleItems.saleItems, saleForm] });
  };

  return {
    productForm,
    updateProductForm,
    saleForm,
    updateSaleForm,
    itemsList,
    saleItems,
    addSaleItem,
  };
}
