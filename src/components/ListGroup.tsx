function ListGroup() {
  let items = ["Gorebridge", "New York", "Tokyo", "Paris", "London"];

  return (
    <>
      <h1>List</h1>
      {/*  v v v v v {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
