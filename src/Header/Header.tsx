import "./Header.css";

const Header: React.FunctionComponent<{
  onClick: () => void;
}> = ({ onClick }) => {
  // export default function Header({ onClick }) {
  return (
    <div className="header">
      <button onClick={onClick}>
        <img src={require("../images/cart.png")}></img>
      </button>
    </div>
  );
};

export default Header;
