import { css } from 'styled-components';

const ModalStyles = css`
  position: absolute;
  top: 14rem;
  left: 1rem;
  right: 1rem;
  margin: 0 1rem;
  outline: none;
  video {
    padding: 1rem 0;
    background: #000;
  }
  .btn-modal-close {
    position: absolute;
    right: 0.85rem;
    top: 0.5rem;
    background: transparent;
  }
  @media(min-width: 1024px) {
    top: 1.25rem;
    left: 8.75rem;
    right: 8.75rem;
    video {
      padding: 4rem 0;
    }
  }
`;

export default ModalStyles;
