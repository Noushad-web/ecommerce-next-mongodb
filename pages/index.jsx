import Head from 'next/head'
import Image from 'next/image'
import HeroCarousel from '../component/HeroCarousel'
import Layout from '../component/Layout'
import Product from '../models/Product'
import db from '../utils/db'


export default function Home(props) {
  
  const { products } = props;
  console.log(products);

  return (
    <Layout title="home">
      <HeroCarousel/>
    </Layout>
  )
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    }
  }
}
