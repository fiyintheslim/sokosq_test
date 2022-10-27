import { useContext } from 'react'
import { ContainerStyles, Button } from './amountControl.styles'
import { FaPlus, FaMinus } from "react-icons/fa"
import { AmountControlProps } from './amount.types'
import { Context } from '../../State/context'
import { ProductActionTypes } from '../../State/reducers/productReducer'

export const AmountControl: React.FC<AmountControlProps> = ({ amount, index }) => {
    const { state, dispatch } = useContext(Context)
    return (
        <ContainerStyles>
            <Button onClick={() => dispatch({ type: ProductActionTypes.increase, payload: index })}><FaPlus /></Button>
            <p>{amount}</p>
            <Button onClick={() => dispatch({ type: ProductActionTypes.decrease, payload: index })}><FaMinus /></Button>
        </ContainerStyles>
    )
}
