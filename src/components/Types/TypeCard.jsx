import { useState } from "react";
import { Card, Button, Dropdown } from "react-bootstrap";

import { FaChevronDown } from "react-icons/fa";

const TypeCard = ({ id, icon, name, systemType, version = [] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState("Select version");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div id={id}>
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          border: isHovered ? "4px solid blue" : "none",
          height: "200px",
          width: "250px",
          paddingTop: "50px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Img
          variant="top"
          src={icon}
          style={{
            height: "50px",
            width: "50px",
          }}
        />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", marginLeft: "40px" }}>
            {name}
          </Card.Title>
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
          <Button
            style={{
              width: "150px",
              backgroundColor: "white",
              borderColor: isHovered ? "blue" : "lightgray",
              color: "black",
            }}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span>{selectedVersion}</span>
            <FaChevronDown color={isHovered ? "blue" : "lightgray"} />
          </Button>
          {showDropdown && (
            <Dropdown.Menu show>
              {version.map((item) => (
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => {
                    setSelectedVersion(item);
                    setShowDropdown(false);
                  }}
                >
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default TypeCard;
