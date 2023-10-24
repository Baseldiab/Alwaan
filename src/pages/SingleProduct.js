import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";

function SingleProduct() {
  let params = useParams();
  // console.log(params);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [params]);

  return (
    <main className=" my-5 ">
      <section className="cards my-4">
        <h1>singleProductPageddddddddddddddddddddddd</h1>
      </section>
    </main>
  );
}
export default SingleProduct;
