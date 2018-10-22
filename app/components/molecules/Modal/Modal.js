import React from 'react';
import ReactModal from 'react-modal';

import styled from 'styled-components';
import styles from './Modal.style';
import Button from '../../atoms/Button';

const Modal = ({ closeModal, className, isOpen, handleAfterOpenFunc, handleRequestCloseFunc, setOverlayRef, setContentRef }) => <ReactModal
  isOpen={isOpen}
  onAfterOpen={handleAfterOpenFunc}
  // onRequestClose={handleRequestCloseFunc}
  className
  closeTimeoutMS={0}
  style={{ overlay: {}, content: {} }}
  contentLabel="Example Modal"
  portalClassName="ReactModalPortal"
  overlayClassName="Overlay"
  className={`${className}`}
  bodyOpenClassName="ReactModal__Body--open"
  htmlOpenClassName="ReactModal__Html--open"
  ariaHideApp={true}
  shouldFocusAfterRender={true}
  shouldCloseOnOverlayClick={true}
  shouldCloseOnEsc={true}
  shouldReturnFocusAfterClose={true}
  role="dialog"
  parentSelector={() => document.body}
  aria={{
    labelledby: "heading",
    describedby: "full_description"
  }}
//   overlayRef={setOverlayRef}
//   contentRef={setContentRef}
>
<div className="modal-content">
    <p>This is the modal Text</p>
    <Button onClick={ () => closeModal()} primary>Close</Button>
</div>
</ReactModal>

export default styled(Modal)`${styles}`;