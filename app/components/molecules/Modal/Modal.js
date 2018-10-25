import React from 'react';
import ReactModal from 'react-modal';

import styled from 'styled-components';
import styles from './Modal.style';

const Modal = ({
  children,
  closeModal,
  className,
  isOpen,
  handleAfterOpenFunc,
  handleRequestCloseFunc,
  setOverlayRef,
  setContentRef,
  shouldCloseOnEsc
}) => (
    <ReactModal
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
      ariaHideApp
      shouldFocusAfterRender
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      shouldReturnFocusAfterClose
      role="dialog"
      parentSelector={() => document.body}
      aria={{
        labelledby: 'heading',
        describedby: 'full_description',
      }}
    //   overlayRef={setOverlayRef}
    //   contentRef={setContentRef}
    >
      {children ? <div>
        {children}
        <button className="btn-modal-close" onClick={() => closeModal()} primary><h2>Close</h2></button>
      </div> :
        <div className="modal-content">
          <p>This is the modal Text</p>
          <button className="btn-modal-close" onClick={() => closeModal()} primary><h2>Close</h2></button>
        </div>
      }
    </ReactModal>);

export default styled(Modal)`${styles}`;
