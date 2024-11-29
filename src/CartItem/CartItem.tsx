import Button from "@mui/material/Button";
import { CartItemType } from "../App";
import { Wrapper } from "./CartItem.styles";
import Item from "../Item/Item";
import { convertToINR } from '../Item/Item';

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="inormation">
                <p>Price: {convertToINR(item.price)} </p>
                <p> Total: {convertToINR(item.amount * item.price)}</p>
            </div>
            <div className="buttons">
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => removeFromCart(item.id)}
                >
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => addToCart(item)}
                >
                    +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
)

export default CartItem;
