

function ListGroup() {

    const items = ["1","2","3"]

    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
    </>
  );
}

export default ListGroup;
