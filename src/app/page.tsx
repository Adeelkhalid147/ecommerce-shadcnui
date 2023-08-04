import BestSelling from '@/components/bestSelling'
import Categories from '@/components/categories'
import FeatureProducts from '@/components/featureProducts'
import Hero from '@/components/hero'
import Promotion from '@/components/promotion'
import Services from '@/components/services'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeatureProducts/>
      <Services/>
      <Promotion/>
      <Categories/>
      <BestSelling/>
    </div>
  )
}
