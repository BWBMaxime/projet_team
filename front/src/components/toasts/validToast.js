import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function ValidToast(props) {
  return (
    <Row>
      <Col xs={6}>
        <Toast className='bg-success' onClose={() => props.setShow(false)} show={props.show} delay={props.delay} autohide>
          <Toast.Header>
            <strong className="me-auto">{props.message}</strong>
          </Toast.Header>
        </Toast>
      </Col>
    </Row>
  );
}

export default ValidToast;