import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = ({ onSearch, clearSearch }) => {
  const handleClick = () => {
    if (clearSearch) {
      clearSearch();
    }
  };

  return (
    <nav className="navbar">
      <h1 className="title">Puppy Bowl</h1>
      <SearchBar onSearch={onSearch} />
      <div className="nav-links">
        <Link to='/' onClick={handleClick}>Player Roster</Link>
        <Link to='/new-player'>Add New Player</Link>
      </div>
    </nav>
  );
};

export default NavBar;
