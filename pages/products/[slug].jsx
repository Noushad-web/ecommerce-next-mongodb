import React from 'react';
import Product from '../../models/Product';
import db from '../../utils/db';

const Single_product = (props) => {

  const {product} = props;

  console.log(product)

  if(!product) {
    <div>products not found</div>
  } 

  return <div></div>;
};

export default Single_product;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  console.log('context: ', context)
  await db.connect();
  const product = await Product.findOne({slug}).lean();
  await db.disconnect();

  return {
    props: {
      product: db.convertDocToObj(product),
    }
  }
}