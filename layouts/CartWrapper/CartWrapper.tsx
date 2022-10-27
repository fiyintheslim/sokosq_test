import React from 'react'
import { FaTimes } from "react-icons/fa"
import { CartWrapperStyles, CartStyles, TotalStyles } from './cartWrapper.styles'
import { CustomButton } from '../../components/Button/Button.styles'
import { CartWrapperProps } from './cartWrapper.types'
import { Context } from '../../State/context'
import { totalVisibleActions } from '../../State/reducers/totalReducer'
import { Button } from '../../components/AmountControl/amountControl.styles'

export const CartWrapper: React.FC<CartWrapperProps> = ({ children }) => {
    const { state, dispatch } = React.useContext(Context)

    return (
        <CartWrapperStyles >
            <CartStyles>
                <div className="top">
                    <h3>MY CART</h3>
                    <CustomButton onClick={() => dispatch({ type: totalVisibleActions.change })}><span>Checkout</span></CustomButton>
                </div>
                <div className='items'>
                    {children}
                </div>
            </CartStyles>
            <TotalStyles open={state.totalVisible}>
                <div className="content">
                    <FaTimes className="close" onClick={() => dispatch({ type: totalVisibleActions.change })} />
                    <h3>Total</h3>
                    <div className="details">
                        <p>
                            <span className="title">Sub-total</span>
                            <span className="value">#{(state.products.reduce((acc, curr) => { return acc + (curr.amount * curr.price) }, 0)).toLocaleString()}</span>
                        </p>
                        <p>
                            <span className="title">Total Items</span>
                            <span className="value">{(state.products.reduce((acc, curr) => { return acc + curr.amount }, 0)).toLocaleString()}</span>
                        </p>

                    </div>
                    <CustomButton><span>Checkout</span></CustomButton>
                </div>
            </TotalStyles>
        </CartWrapperStyles>
    )
}
