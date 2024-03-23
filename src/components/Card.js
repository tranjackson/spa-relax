import styled from "styled-components";

/*
Most of the time when you create reusable components, you will be forwarding props. and they will be
visually reusable.

So use a styled component to create a reusable card component. 

Old way doing it:
const Card = (props) => {
    return (

    );
    }
*/

const Card = styled.div`
  background-color: ${(props) => {
    if (props.color === "color-1") {
      return "#fee250";
    }
    if (props.color === "color-2") {
      return "#798C35";
    }
    if (props.color === "color-3") {
      return "#FF9000";
    }
    if (props.color === "color-4") {
      return "#BFBB84";
    }
    return "#F2F2F2";
  }};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  min-height: 200px;

`;

export default Card;
