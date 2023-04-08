import Banner from '@/components/banner/Banner'
import CategorySection from '@/components/categorySection/CategorySection'
import Header from '@/components/header/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CategorySection />
    </>
  )
}
