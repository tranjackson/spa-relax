import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  background-color: ${(props) => {
    if (props.color === "primary") {
      return "#D9A200";
    }
    if (props.color === "secondary") {
      return "#BFBB84";
    }
    if (props.color === "clicked") {
        return "#4A5928";
      }
    return "#798C35";
  }};
  border: 0;
  padding: 4px 8px;
  border-radius: 4px;
`;

export default Button;
