import "./Header.css";

export default function Header({ onClick }) {
  return (
    <div className="header">
      <button onClick={onClick}>
        <img src={require("../images/cart.png")}></img>
      </button>
    </div>
  );
}
