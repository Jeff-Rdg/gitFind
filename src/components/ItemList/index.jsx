import { ItemListContent } from "./styles";

const ItemList = (props) => {
  return (
    <ItemListContent>
      <strong>{props.title}</strong>
      <p>{props.description}</p>
      <hr />
    </ItemListContent>
  );
};

export default ItemList;
