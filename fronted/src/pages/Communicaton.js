
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Communication = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <Container
      fluid
      ref={contactRef}
      className={`bg-dark text-white py-5 px-5 contact-container ${
        isVisible ? "active" : ""
      }`}
    >
      <h2 className="text-center mb-5">Contact Us</h2>
      <Row>
        {/* Left Side */}
        <Col md={6}>
          <p>
            The premier guide to leading legal professionals throughout the world
          </p>
          <p>
            If you have any questions or wish to speak with a representative, feel free to get in touch...
          </p>
          <p><strong>General Enquiries:</strong><br/>+44 (0) 870 977 1000<br/>office@global.law</p>
          <p><strong>Recommend/Apply:</strong><br/>applications@global.law</p>
          <p><strong>Advertising:</strong><br/>sales@global.law</p>

          <h5>Birmingham Office:</h5>
          <p>Regus Building, Watling Court, Staffordshire, WS11 0EL</p>

          <h5>London Office:</h5>
          <p>124 City Road, London, EC1V 2NX</p>

          <h5>Dubai Office:</h5>
          <p>Dubai South Business Center, P.O. Box 282228, Dubai</p>
        </Col>

        {/* Right Side */}
        <Col md={6}>
          <h4>Send Us A Message</h4>
          <Form>
            <Row>
              <Col><Form.Group className="mb-3">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group></Col>
              <Col><Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group></Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Company" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email Address *" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={4} placeholder="Your Message *" />
            </Form.Group>

            {/* Simulated reCAPTCHA */}
            <div className="mb-3">
              <input type="checkbox" id="captcha" />
              <label htmlFor="captcha" className="ms-2">I'm not a robot</label>
            </div>

            <Button variant="primary" type="submit">Send</Button>
          </Form>
        </Col>
      </Row>
    </Container>

  );
};

export default Communication;
