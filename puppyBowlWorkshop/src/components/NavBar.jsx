import { Link } from "react-router-dom";

const NavBar = ({ clearSearch }) => {
  const handleClick = () => {
    if (clearSearch) {
      clearSearch();
    }
  };
  return (
    <nav>
      <Link to='/' onClick={handleClick}>
        All Players
      </Link>
      {/* <Link to='/players/:id'>Single Player</Link> */}
      <Link to='/new-player'>Add New Player</Link>
    </nav>
  );
};

export default NavBar;
