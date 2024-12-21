// src/components/AboutUsPage.jsx
import React, { useState } from 'react';
import { Card, Button, Modal, Col, Row } from 'react-bootstrap';
import '../styles/AboutUsPage.css'
// Sample data for timeline and team
const timelineData = [
  { year: '2015', event: 'Business Started', description: 'We opened our doors to provide top-notch food.' },
  { year: '2018', event: 'Award Won', description: 'We were awarded for excellence in customer service.' },
  { year: '2021', event: 'Expansion', description: 'Opened our second location in a new city.' },
];

const teamMembers = [
  {
    name: 'Hitha',
    role: 'Head Chef',
    bio: 'Has over 20 years of experience in the food industry, leading the empire to success.',
    image: 'https://th.bing.com/th/id/OIP.kbga9wZWoWAtsHmcwrINIAHaFA?w=270&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Josvita',
    role: 'Marketing Director',
    bio: 'She is behind our campaigns, creating engaging strategies that speak to our customers.',
    image: 'https://th.bing.com/th/id/OIP.m4sXr9HTvjw0zUSsjyYE9wHaE7?w=277&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Prarthana',
    role: 'Sous Chef',
    bio: 'She is our team lead for interns and has been excelling since 3 years.',
    image: 'https://th.bing.com/th/id/OIP.HNG9H671zydJ_kGbHXABJwHaGX?w=202&h=173&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Poorvi',
    role: 'Manager',
    bio: 'With 5 years of experience, she manages the staff and deliveries.',
    image: 'https://th.bing.com/th/id/OIP.PCSDVZKuPkSWEhRGHNR31AHaE7?w=202&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Mandara',
    role: 'Assistant Manager',
    bio: 'Handles the waiters and baristas for effecient running of the empire.',
    image: 'https://th.bing.com/th/id/OIP.dYwW75bDCCfxfxtImzyBJAHaE8?w=202&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  }
];

const AboutUsPage = () => {
  const [show, setShow] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  // Show modal
  const handleShow = (teamMember) => {
    setSelectedTeamMember(teamMember);
    setShow(true);
  };

  // Close modal
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="about-us-page">
      <section className="business-story">
        <h1>Our Story</h1>
        <p>We are a family-owned restaurant with a passion for serving quality food. Since our founding, we've focused on making sure every dish tells a story of tradition and love.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>To provide delicious, healthy, and affordable meals with the utmost care and attention to our community.</p>
      </section>

      <section className="timeline">
        <h2>Our Journey</h2>
        <ul>
          {timelineData.map((event, index) => (
            <li key={index}>
              <h4>{event.year}</h4>
              <p><strong>{event.event}:</strong> {event.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={4}>
              <Card className="team-card">
                <Card.Img variant="top" src={member.image} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.role}</Card.Text>
                  <Button variant="primary" onClick={() => handleShow(member)}>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Modal for team member details */}
      {selectedTeamMember && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedTeamMember.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Role: {selectedTeamMember.role}</h5>
            <p>{selectedTeamMember.bio}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default AboutUsPage;
