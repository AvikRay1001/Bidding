import { Container, Heading } from "../../router";
import { productlists } from "../../utils/data";
import { ProductCard } from "../cards/ProductCard";

export const ProductList = () => {
  return (
    <>
      <section className="product-home">
        <Container>
          <Heading
            title="Live Bidding"
            subtitle="Explore on the world's best & largest Bidding marketplace with our beautiful farmer grown crops. We want to be a part of their smile, success and future growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-8">
            {productlists?.slice(0, 12)?.map((item, index) => (
              <ProductCard item={item} key={index + 1} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
