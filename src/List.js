import ListItem from "./ListItem";

const List = ({ items, names, Id }) => {
  return (
    <ul className="namesContainer">
      {items.map((item) => (
        <ListItem key={item.id} itemName={item.name} itemId={item.id} />
      ))}
    </ul>
  );
};

export default List;
