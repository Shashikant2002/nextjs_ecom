import InnerProductContent from '@/components/InnerProductContent/InnerProductContent';
import Header from '@/components/header/Header';
import InnerProductBanner from '@/components/innerProductBanner/InnerProductBanner';
import { product } from '@/utils/jsonData';
import { useRouter } from 'next/router';
import React from 'react';


const productinner = () => {
  const router = useRouter();
  const product_id = router.query.product_id;

  return (
    <>
      <Header />
      <InnerProductBanner name={"Men’s blue cotton t-"} />
      <InnerProductContent data={product} />
    </>
  )
}

export default productinner
