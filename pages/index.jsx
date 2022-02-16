import ProductCard from "../component/Card";
import Head from "next/head";
import Image from "next/image";
import HeroCarousel from "../component/HeroCarousel";
import Layout from "../component/Layout";
import Product from "../models/Product";
import db from "../utils/db";
import { Box, Container, Pagination, Typography } from "@mui/material";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import Banner from "../component/Banner";
import MultipleCarousel from "../component/MultipleCarousel";

const handleChange = (e) => {
  console.log(e)
}

export default function Home(props) {
  const { products } = props;
 
  return (
    <Layout title="home">
      <Container sx={{ padding: "4rem 0" }}>
        <Typography variant="h3" sx={{
          textAlign: 'left',
          marginBottom: '15px',
          color: '#243647',
          fontWeight: '500'
        }}>
          Respect The Jeans
        </Typography>

        <HeroCarousel/>

        <Banner />
        
        <MultipleCarousel products={products.slice(0, 15)} />

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
          {products.map((product, index) => {
            if(index < 20) return <ProductCard product={product} key={index} />;
          })}

        </Box>
        <Pagination sx={{ maxWidth: 'max-content', margin: '1.5rem auto' }}
          count={products.length} variant="outlined" shape="rounded" onChange={handleChange} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
