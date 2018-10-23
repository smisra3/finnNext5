// @flow
import type { Map } from 'react';
import { PureComponent } from 'react';
import { fromJS } from 'immutable';

import styled from 'styled-components';
import styles from './List.style';

type Props = {
  className: string,
  listType?: string,
  inheritedStyles?: string,
  listItemStyle?: Map,
  listItems: Map,
  defaultStyles?: boolean,
  elementRef?: any => void,
};

class List extends PureComponent<Props> {
  render() {
    const {
      className,
      listType,
      listItems,
      listItemStyle,
    } = this.props;
    const TagTypeKey = listType || 'ul';
    const listItemsData = fromJS(listItems);
    const listItemStyleData = fromJS(listItemStyle);
      <TagTypeKey className={className}>
        {listItemsData.map((item, index) => (<li className={listItemStyleData[index]} keys={`list-index-${index}`}>{item}</li>))}
      </TagTypeKey>;
  }
}

List.defaultProps = {
  listType: 'ul',
  inheritedStyles: '',
  listItemStyle: null,
  defaultStyles: false,
  elementRef: null,
};

export default styled(List)`${styles}`;
export { List as ListVanilla };
