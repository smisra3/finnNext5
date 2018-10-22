// @flow
import type { Node } from 'react';
import camelCase from 'lodash/camelCase';
import styled from 'styled-components';
import styles from './FieldError.style';

type Props = {
  className: string,
  errorMessage?: string | Array,
  dataSlnmId?: string,
};

const FieldError = ({ className, errorMessage, dataSlnmId }: Props): Node => (
  errorMessage &&
        errorMessage.length && (
          <p
            className={`${className} error`}
            aria-live="assertive"
            role="alert"
            data-slnm-id={`${dataSlnmId}-error`}
          >
            {Array.isArray(errorMessage)
              ? errorMessage.map(item => <span key={item}>{item}</span>)
              : errorMessage }
          </p>
  )
);

export default styled(FieldError)`
  ${styles};
`;
export { FieldError as FieldErrorVanilla };
