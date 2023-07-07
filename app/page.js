import Image from 'next/image'
import { getProducts } from '@/utils'
import Products from './products/page';

export default async function Home() {

  // const products = getProducts()

  // // console.log(products);
  return (
    <main className="hero bg-slate-400">
      {/* <Products/> */}
      Home
    </main>
  )
}
