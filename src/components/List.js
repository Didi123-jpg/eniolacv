export function List(link, title) {
  return (
    <li className="lin">
      <a href={link} style={{ color: "#7c808f" }}>
        {title}
      </a>
    </li>
  );
}

export function Card(image, name, year) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="card" className="card-images" />
      </div>
      <div className="card-lower">
        <div>{name}</div>
      </div>
    </div>
  );
}

export function CardComponent(stack, array) {
  return (
    <div
      style={{
        backgroundColor: "#4a4c52",
        padding: "10px",
        borderRadius: "15px",
        margin: "5px",
      }}
    >
      <div>
        <h4>{stack}</h4>
      </div>
      <div className="card-content">
        {array.map((prog) => Card(prog.image, prog.name, prog.year))}
      </div>
    </div>
  );
}

export function Portfolio(image) {
  return (
      <div style={{ borderRadius: "20px", height: "200px", padding:"20px" }}>
        <img
          src={image}
          alt="alt"
          style={{
            borderRadius: "20px",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
  );
}
