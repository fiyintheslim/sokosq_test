import styled from "styled-components";

export const CardStyles = styled.div`
  border-bottom: solid 0.1rem var(--grayPrimary);
  padding: 1rem 1rem;
  display: flex;
  gap: 2rem;
  position: relative;
  align-items: center;
  justify-content: space-between;

  .price {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .name {
    font-size: 1.4rem;
    font-weight: 400;
  }

  /* .remove {
    position: absolute;
    right: 0;
    top: 1rem;
  } */
`;

export const ImageContainerStyles = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;

  img {
    object-fit: cover;
  }
`;
