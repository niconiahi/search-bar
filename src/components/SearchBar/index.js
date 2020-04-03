import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { FaSearch, FaTimesCircle } from "react-icons/fa";

// styled
import { Container } from "./styled";

const SearchBar = () => {
  const [criteria, setCriteria] = useState("");
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const props = useSpring({
    from: {
      width: isActive ? 0 : 0,
      borderBottomWidth: isActive ? 0 : 0,
      marginLeft: isActive ? 0 : 0
    },
    width: isActive ? 160 : 0,
    borderBottomWidth: isActive ? 1 : 0,
    marginLeft: isActive ? 10 : 0
  });

  const handleSearchClick = () => setIsActive(isActive => !isActive);

  const handleBlur = () => {
    if (!criteria) setIsActive(isActive => !isActive);
    setCriteria("");
  };

  const handleDeleteClick = () => setCriteria("");

  const handleInputChange = e => setCriteria(e.target.value);

  useEffect(() => {
    if (isActive) inputRef.current.focus();
  }, [isActive]);

  return (
    <Container>
      <FaSearch onClick={handleSearchClick} className="search-icon" />
      <animated.div style={props} className="input-wrapper">
        <input
          ref={inputRef}
          criteria={criteria}
          value={criteria}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="input"
        />
        {isActive && criteria && (
          <FaTimesCircle className="delete-icon" onClick={handleDeleteClick} />
        )}
      </animated.div>
    </Container>
  );
};

export default SearchBar;
