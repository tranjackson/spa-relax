import React from "react";
import { useTotal } from "../components/TotalContext";
import styled from "styled-components";
import Card from "../components/Card";
import Button from "../components/Button";

const SpaImage = styled.img`
  width: 70%;
  max-width: 400px;
  height: auto;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
`;

// Styled component for the total display container
const TotalContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Products = () => {
  const { total, subtotal, addProduct, resetTotal } = useTotal();

  /*
  const addProduct = (price) => {
    setTotal(total + price);
  };

  const resetTotal = () => {
    setTotal(0); // Reset the total to $0
  };
 */

  return (
    <div>
      <h2 className="mb-1">Our Products</h2>
      <TotalContainer>
        <h4>Products Subtotal: ${subtotal}</h4>
        <h3>Total: ${total}</h3>
        <Button color="secondary" onClick={resetTotal}>
          Clear Total
        </Button>
      </TotalContainer>
      <div className="row pt-3 pb-3">
        {/* Product items */}
        <div className="col">
          <Card color="color-4" className="h-100">
            <h3>Rejuvenation Serum</h3>
            <SpaImage
              src="../assets/icons/tincture.jpg"
              class="card-img-top"
              alt="Tincture Oil"
            />
            <p>
              The Rejuvenation Serum lifts and revitalizes, wiping away the
              visbile lines from your face caused by all those years of worry and anxiety!
            </p>
            <p>Price: $275</p>
            <Button color="primary" onClick={() => addProduct(200)}>
              Add
            </Button>
          </Card>
        </div>

        <div className="col">
          <Card color="color-3" className="h-100">
            <h3>Reishi Mushroom Tea</h3>
            <SpaImage
              src="../assets/icons/teapot.jpg"
              class="card-img-top"
              alt="Reishi Mushroom Tea"
            />
            <p>
            For a restful bedtime, enjoy this tea in the early evening to allow its compounds the
              opportunity to react with your body and lower cortisol levels.
            </p>
            <p>Price: $100</p>
            <Button color="primary" onClick={() => addProduct(150)}>
              Add
            </Button>
          </Card>
        </div>

        <div className="col">
          <Card color="color-2" className="h-100">
            <h3>Moisturizing Protection Potion</h3>
            <SpaImage
              src="../assets/icons/potion.jpg"
              class="card-img-top"
              alt="Potion Bottle"
            />
            <p>
              With herbs harvested during the New Moon, this soothing potion not
              only moisturizes your skin, you can cast a protection spell with
              it too! Stevie Nicks approved.
            </p>
            <p>Price: $150</p>
            <Button color="primary" onClick={() => addProduct(75)}>
              Add
            </Button>
          </Card>
        </div>

        <div className="col">
          <Card color="color-1" className="h-100">
            <h3>Lavender Eucalyptus Diffuser</h3>
            <SpaImage
              src="../assets/icons/aroma-diffuser.jpg"
              class="card-img-top"
              alt="Aroma Diffuser"
            />
            <p>
              Humidify your space with the scent of lavender and eucalyptus.
              This aromatherapy diffuser will help you relax and unwind after a
              long day. The silent diffuser is pefect for your home spa!
            </p>
            <p>Price: $75</p>
            <Button color="primary" onClick={() => addProduct(75)}>
              Add
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;
