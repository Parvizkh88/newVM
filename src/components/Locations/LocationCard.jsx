import React, { useState } from 'react'
import { Card } from 'react-bootstrap';

const LocationCard = ({id, flag, city }) => {
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
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>{city}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LocationCard