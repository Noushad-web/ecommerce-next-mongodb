import ProductCard from "../component/Card";
import Head from "next/head";
import Image from "next/image";
import HeroCarousel from "../component/HeroCarousel";
import Layout from "../component/Layout";
import Product from "../models/Product";
import db from "../utils/db";
import { Box, Container, Pagination } from "@mui/material";

const handleChange = (e) => {
  console.log(e)
}

export default function Home(props) {
  const { products } = props;
  const productWithPagination = Array(products)   
  return (
    <Layout title="home">
      <Container sx={{ padding: "4rem 0" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
          {products.map((product, index) => {
            return <ProductCard product={product} key={index} />;
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
