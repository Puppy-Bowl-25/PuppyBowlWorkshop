import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>All Players</Link>
      <Link to='/players/:id'>Single Player</Link>
    </nav>
  );
};

export default NavBar;
