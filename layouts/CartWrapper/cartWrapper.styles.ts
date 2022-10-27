import styled from "styled-components";
import { TotalStylesProps } from "./cartWrapper.types";

export const CartWrapperStyles = styled.main`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem;
`;

export const CartStyles = styled.div`
  background: #fff;
  padding: 3rem;
  width: 100%;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: solid 0.1rem var(--grayPrimary);

    button {
      @media only screen and (min-width: 800px) {
        display: none;
      }
    }
  }
  .items {
    height: 70vh;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background: var(--grayPrimary);
    }

    ::-webkit-scrollbar-thumb {
      background: black;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgb(48, 48, 48);
    }
  }

  @media only screen and (min-width: 800px) {
    width: 50rem;
  }
`;

export const TotalStyles = styled.div<TotalStylesProps>`
  position: fixed;
  right: ${({ open }) => (open ? "0" : "-100vw")};
  top: 0;
  transition: 0.3s ease;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0.1rem);
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 800px) {
    position: static;
    width: 50rem;
  }

  .close {
    position: absolute;
    right: 3rem;
    top: 3rem;
    font-size: 2rem;

    @media only screen and (min-width: 800px) {
      display: none;
    }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: 95%;
    background: #fff;
    padding: 2rem;
  }

  .details {
    width: 100%;
    border-bottom: 0.1rem solid var(--grayPrimary);
    margin-bottom: 3rem;
  }

  .details p {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 2rem;
  }

  .title {
    font-weight: 600;
    font-size: 1.4rem;
  }
  .value {
    font-weight: 500;
    font-size: 1.2rem;
  }
`;
