import styled from 'styled-components'

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`
export const ProductImage = styled.div`
  width: 35%;
  height: 0;
  padding-bottom: 35%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`
export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
    outline: none;
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0 0.5rem;
    cursor: pointer;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: #494949;
  }
`
export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
  border: none;
  outline: none;
`
