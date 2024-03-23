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
`;

// Styled component for the total display container
const TotalContainer = styled.div`
  padding-top: 20px; 
  padding-bottom: 20px; 
`;


const Packages = () => {
  const { total, addPackage, resetTotal } = useTotal(); // Use context to get total, addPackage, and resetTotal

  return (
    <div>
      <h2 className="mb-1">Our Packages</h2>
      <TotalContainer>
        <h3>Total: ${total}</h3> {/* Use total from context */}
        <Button color="secondary" onClick={resetTotal}>Clear Total</Button> {/* Use resetTotal from context */}
      </TotalContainer>
      <div className="row pt-3 pb-3">
        {/* Package items */}
        <div className="col">
          <Card className="h-100">
            <h3>Rejuvenation Facial</h3>
            <SpaImage src="../assets/facial.jpg" className="card-img-top" alt="Facial Package" /> {/* Use className instead of class */}
            <p>Update your most important asset with our Rejuvenation Facial - Your face! Lotus Spa's moisturizing facial will leave your skin feeling refreshed and rejuvenated.</p>
            <p>Price: $200</p>
            <Button color="primary" onClick={() => addPackage(200)}> {/* Use addPackage from context */}
              Add Package
            </Button>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100">
            <h3>Hot Stone Massage</h3>
            <SpaImage src="../assets/hot-stone.jpg" class="card-img-top" alt="Hot Stone Massage" />
            <p>An ancient technique embued with the wisdom of the ages! This relaxing massage uses smooth, heated stones to help ease muscle tension and pain.</p>
            <p>Price: $150</p>
            <Button color="primary" onClick={() => addPackage(150)}>
              Add Package
            </Button>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100">
            <h3>Pedicure</h3>
            <SpaImage src="../assets/reflexology.jpg" class="card-img-top" alt="Pedicure" />
            <p>When the hounds are crying, tame the wild beasts and walk away feeling like a new person! Our pedicure package includes a foot soak, nail trim, and polish.</p>
            <p>Price: $75</p>
            <Button color="primary" onClick={() => addPackage(75)}>
              Add Package
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Packages;