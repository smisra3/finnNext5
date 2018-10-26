import React from 'react';
import ReactModal from 'react-modal';

import styled from 'styled-components';
import styles from './Modal.style';

type Props = {
  children: Node,
  config: object,
  className: string,
  isOpen: boolean,
}

const Modal = ({
  children,
  config,
  className,
  isOpen,
  ...others
} : Props): Node => {
  const { closeModal, shouldCloseOnOverlayClick, shouldCloseOnEsc, handleAfterOpenFunc } = config;
  return <ReactModal
    {...others}
    isOpen={isOpen}
    onAfterOpen={handleAfterOpenFunc}
    onRequestClose={closeModal}
    className
    closeTimeoutMS={300}
    style={{ overlay: {}, content: {} }}
    contentLabel="Example Modal"
    // portalClassName="ReactModalPortal"
    overlayClassName="Overlay"
    className={`${className}`}
    bodyOpenClassName="ReactModal__Body--open"
    htmlOpenClassName="ReactModal__Html--open"
    ariaHideApp
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    shouldCloseOnEsc={shouldCloseOnEsc}
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
      <p className="btn-modal-close" onClick={() => closeModal()} primary><h2>Close</h2></p>
    </div> :
      <div className="modal-content">
        Nothing to show here...
        <p className="btn-modal-close" onClick={() => closeModal()} primary><h2>Close</h2></p>
      </div>
    }
  </ReactModal>
};

Modal.defaultProps = {
  config: {
    closeModal: () => {},
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEsc: true,
    handleAfterOpenFunc: () => {},
  },
  className: '',
  isOpen: false,
}

export default styled(Modal)`${styles}`;
