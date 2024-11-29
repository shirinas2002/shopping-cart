import Button from "@mui/material/Button";
import { CartItemType } from "../App";
import { Wrapper } from "./Item.styles";

// Function to convert price to INR
export const convertToINR = (price: number, rate: number = 83): string => {
  return `₹${(price * rate).toFixed(2)}`; // Convert price to INR and format
};

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{convertToINR(item.price)}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </Wrapper>
  );
};

export default Item;
