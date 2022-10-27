import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CartWrapper } from '../layouts/CartWrapper/CartWrapper'
import { useReducer, useContext } from "react"
import { Context } from '../State/context'
import { ProductCard } from '../components/ProductCard/ProductCard'


export default function Home() {
  const { state, dispatch } = useContext(Context)
  return (
    <CartWrapper >
      {state.products.map(({ name, price, amount }, i) => <ProductCard key={i} name={name} price={price} amount={amount} index={i} />)}
    </CartWrapper>
  )
}
