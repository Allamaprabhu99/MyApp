const ProductList = (props) => {
  return (
    <div style={{ margin: "3px" }}>
      <div
        className="card"
        style={{
          width: "14rem",
          height: "40rem",
          borderStyle: "dotted",
          borderWidth: "2px",
          borderColor: " gold",
          marginTop: "20px",
          margin: "8px",
        }}
      >
        <div>
          <img
            style={{ height: "15rem" }}
            className="card-img-top"
            src={props.product.images[0]}
            alt=".."
          />
          <div className="card-body">
            <h5 class="card-title">{props.product.title}</h5>
            <p class="card-text">Price:{props.product.price}</p>
            <p>{props.product.description}</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
