import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to='/'>All Players</Link>
      <Link to='/players/:id'>Single Player</Link>
    </>
  );
};
