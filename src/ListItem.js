const ListItem = ({ itemName, itemId }) => {
  return <div className="namesContainer-names">{JSON.stringify(itemId)} {JSON.stringify(itemName)}</div>;
};

export default ListItem;
