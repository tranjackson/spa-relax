import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";

// New styled component for the background
const BackgroundContainer = styled.div`
  background-image: url('../assets/spa-salon.jpg'); // Set the background image
  background-size: cover; // Ensures the background covers the entire container
  background-position: center; // Centers the background image
  background-repeat: no-repeat; // Prevents the background image from repeating
  width: 100%; // Ensures the container spans the full width of its parent
  padding: 20px; // Add some padding around the HomePageContainer
  min-height: 120vh; // Ensures the BackgroundContainer will at least be as tall as the viewport height
`;

// Updated HomePageContainer with background color
const HomePageContainer = styled.div`
  text-align: center;
  background-color: #F2F2F2; // Set the background color to light grey
  padding: 20px; // Add some padding inside the HomePageContainer
`;

const HomeTitle = styled.h2`
  margin-bottom: 20px;
`;

const HomeDescription = styled.p`
  font-size: 1em;
  padding: 0 20px; // Add padding for better text readability
`;

const ButtonContainer = styled.div`
  display: flex; // Set the container to use flexbox
  justify-content: center; // Align items to the center
  gap: 20px; // Controls the spacing between buttons
  margin-top: 20px;
  padding: 20px;
`;

// Updated Home component to include the BackgroundContainer
const Home = () => {
  return (
    <BackgroundContainer>
      <HomePageContainer>
        <HomeTitle>Welcome to Lotus Spa</HomeTitle>
        <HomeDescription>
          Lotus Spa offers a serene escape from the stresses of everyday life. Our
          luxurious spa packages and high-quality products will rejuvenate your body and soul. 
          Whether you're looking for a revitalizing
          facial, a soothing massage, or premium spa products, Lotus Spa has
          everything you need to relax and feel pampered. Discover the ultimate
          spa experience with Lotus Spa!
        </HomeDescription>
        {/* Buttons for navigation */}
        <ButtonContainer>
          <Link to="/packages">
            <Button color="primary">Book a Massage Today</Button>
          </Link>
          <Link to="/products">
            <Button color="primary">Buy Our Products</Button>
          </Link>
        </ButtonContainer>
      </HomePageContainer>
    </BackgroundContainer>
  );
};

export default Home;
