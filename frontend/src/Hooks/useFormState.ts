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

  const [updateProductFromSaleForm, setUpdateProductFromSaleForm] = useState({
    productId: '',
    saleId: '',
    quantity: '',
  });

  const itemsList = saleItems.saleItems;

  const updateProductForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setProductForm({ ...productForm, [target.name]: target.value });
  };

  const registerNewSaleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
/*     const { target } = event;
    setSaleForm({ ...saleForm, [target.name]: target.value }); */
  };

  const updateProductFromSale = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setUpdateProductFromSaleForm(
      { ...updateProductFromSaleForm, [target.name]: target.value },
    );
  };

  const addSaleItem = () => {
    /* setSaleItems({ saleItems: [...saleItems.saleItems, saleForm] }); */
  };

  return {
    productForm,
    updateProductForm,
    saleForm,
    registerNewSaleForm,
    itemsList,
    saleItems,
    addSaleItem,
    updateProductFromSaleForm,
    updateProductFromSale,
    setSaleItems,
  };
}
