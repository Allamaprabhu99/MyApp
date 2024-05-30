const Button = (props) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-info"
        onClick={() => {
          props.incrementHandler(props.val, props.op);
        }}
        style={{
          marginLeft: "5px",
          color: "black",
          fontWeight: "bold",
          WebkitTransitionDuration: "1s",
          transitionDuration: "1s",
          float: "left",
          // transform: "rotateY(180deg)",
        }}
      >
        {props.op} by {props.val}
      </button>
    </div>
  );
};

export default Button;
