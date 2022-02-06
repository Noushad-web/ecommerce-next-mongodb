const description = ' Integer suscipit sapien magna, vitae hendrerit eros luctus ut. Quisque id suscipit augue, rutrum faucibus tortor. Proin ac tortor orci. Nullam erat justo, bibendum at ultricies sed, mollis ut nunc. Nunc leo nunc, placerat ac elementum vel, luctus eget lacus. Nunc ultrices pulvinar nulla, eu viverra ligula aliquet vel. In ullamcorper risus risus, non efficitur nunc eleifend vitae. Nulla rutrum placerat nibh a laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque in felis in risus ultricies tempor. Maecenas sit amet ornare diam. Praesent fermentum odio non aliquet euismod. Quisque commodo et lectus nec maximus. '


const generateProducts = (arrayLength) => (minCategory, maxCategory) => (minCost, maxCost) => {

  let a = new Array(arrayLength);

  for (let i = 0; i < a.length; i++) {
    const minCat = minCategory;
    const maxCat = maxCategory;
    const minPrice = minCost;
    const maxPrice = maxCost;
    const randomCategory = Math.floor(Math.random() * (+maxCat - +minCat)) + +minCat;
    const randomStock = Math.floor((Math.random() * 1000) % 2);
    const randomPrice = (Math.random() * (+maxPrice - +minPrice)) + +minPrice;
    const rating = Math.floor(Math.random() * 6);

    a[i] = {
      "id": 1000 + i + 1,
      "category": `Category ${randomCategory}`,
      "name": `Product ${i + 1}`,
      "image": `https://picsum.photos/400?image=${Math.floor(Math.random() * 1000)}`,
      "stock": !!randomStock,
      "price": randomPrice.toFixed(3),
      "description": description,
      "slug": `product-${i + 1}`,
      "brand": 'armaani',
      "rating": rating
    }
  }
  console.log('Below is your products json array');
  console.log(a);
}
// sample execution
generateProducts(100)(1, 5)(1000, 4000);
