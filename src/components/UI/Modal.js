import React, { Fragment } from 'react'
import classes from '../UI/Modal.module.css';
import ReactDom from 'react-dom';

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}

const ModalOverlay = (props) => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
export default function Modal(props) {
    const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
        {ReactDom.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,portalElement
        )}
    </Fragment>
  )
}
