import { useContext } from 'react'
import Image from 'next/image'
import { FaTrash } from "react-icons/fa"
import { ProductCardProps } from './productCard.types'
import { AmountControl } from '../AmountControl/AmountControl'
import { ImageContainerStyles, CardStyles } from "./productCard.styles"
import { Context } from '../../State/context'
import { ProductActionTypes } from '../../State/reducers/productReducer'


export const ProductCard: React.FC<ProductCardProps> = ({ name, amount, price, index }) => {
    const { state, dispatch } = useContext(Context)

    return (
        <CardStyles>
            <ImageContainerStyles>
                <Image src="/shirt.jpg" alt="product image" fill={true} />
            </ImageContainerStyles>
            <div>
                <p className="name">{name}</p>
                <p className="price">#{price}</p>
            </div>

            <AmountControl amount={amount} index={index} />
            <FaTrash className="remove" onClick={() => dispatch({ type: ProductActionTypes.delete, payload: index })} />
        </CardStyles>
    )
}
