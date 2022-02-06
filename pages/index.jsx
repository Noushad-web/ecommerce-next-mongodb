import Head from 'next/head'
import Image from 'next/image'
import HeroCarousel from '../component/HeroCarousel'
import Layout from '../component/Layout'


export default function Home() {
  
  return (
    <Layout title="home">
      <HeroCarousel/>
      <h1>Heloo</h1>
    </Layout>
  )
}
