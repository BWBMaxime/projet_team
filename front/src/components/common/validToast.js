import React, { useState,useContext } from 'react';
import {CarNCoContext} from "../App";
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function ValidToast(props) {
    const onCloseToast= useContext(CarNCoContext).closeToast;
   // const [show, setShow] = useState(false);
    console.log(props);
  return (
    <Row>
        <Toast className={'bg-'+props.type + ' w-100'} show={props.show}   onClick={() => onCloseToast()} >
          <Toast.Header>
            <strong className="me-auto">{props.message}</strong>
          </Toast.Header>
        </Toast>
    </Row>
  );
}

export default ValidToast;