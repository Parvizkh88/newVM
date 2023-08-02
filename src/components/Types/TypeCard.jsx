// import React from 'react'

// const TypeCard = () => {
//   return (
//     <div>LocationCard</div>
//   )
// }

// export default TypeCard;
import{ useState } from "react";
import { Card, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa"; // Importing dropdown arrow icon

const TypeCard = ({ id, icon, name, systemType, version = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id={id}>
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          border: isHovered ? "1px solid blue" : "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Img variant="top" src={icon} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>{name}</Card.Title>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>{systemType}</span>
            <span style={{ color: "lightgray" }}>System Type</span>
          </div>
          <DropdownButton
            style={{
              width: "150px",
              backgroundColor: "white",
              borderColor: isHovered ? "blue" : "lightgray",
              color: isHovered ? "blue" : "lightgray",
            }}
            id="dropdown-basic-button"
            title="Select version"
          >
            {version.map((item) => (
              <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
            ))}
          </DropdownButton>
          {/* <Button
            style={{
              width: "150px",
              backgroundColor: "white",
              borderColor: isHovered ? "blue" : "lightgray",
              color: isHovered ? "blue" : "lightgray",
            }}
          >
            {isHovered ? (
              <span style={{ color: "black" }}>20.04</span>
            ) : (
              <span>Select version</span>
            )}
            <FaChevronDown color={isHovered ? "blue" : "lightgray"} />
          </Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default TypeCard;
