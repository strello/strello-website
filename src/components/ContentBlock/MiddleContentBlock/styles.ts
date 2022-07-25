import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export const MiddleBlockContainer = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("div")`
  margin: 1.5rem 0 2rem 0;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  width: 100%;
  max-width: 540px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const HeadDiv = styled("div")`
display: flex;
justify-content: space-between;
width: 100%;
@media only screen and (max-width: 950px) {
  padding-bottom: 4rem;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}

`;

export const Heading = styled("h6")`
@media only screen and (max-width: 950px) {
  padding-bottom: 4rem;
  text-align: center;
  justify-content: center;
}
`;
