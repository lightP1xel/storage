import { useState } from "react";
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="burger-menu">
      <Link 
        className="burger-button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        Storage
      </Link>

      {isOpen && (
        <div className="burger-dropdown">
          <Link 
            to="/storage/all" 
            className="burger-link"
            onClick={() => setIsOpen(false)}
          >
            All Files
          </Link>
          <Link 
            to="/storage/upload" 
            className="burger-link"
            onClick={() => setIsOpen(false)}
          >
            Upload
          </Link>
        </div>
      )}
    </div>
  );
};