import Banner from '@/components/banner/Banner'
import CategorySection from '@/components/categorySection/CategorySection'
import Header from '@/components/header/Header'
import OfferSection from '@/components/offerSection/OfferSection'
import ProductSection from '@/components/productSection/ProductSection'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <head>
        <title>Home</title>
      </head> */}
      <Header />
      <Banner />
      <CategorySection />
      <OfferSection />
      <ProductSection />
    </>
  )
}
