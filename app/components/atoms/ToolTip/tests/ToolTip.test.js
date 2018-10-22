import { shallow, mount } from 'enzyme';
import { ToolTip } from '../ToolTip';
import { KEY_ENTER } from '../../../../constants';

/* eslint-disable import/prefer-default-export */
export const props = {
  children: <div>TEST</div>,
  className: 'string',
  label: 'TEST',
  container: 'tooltip',
};

const event = {
  which: KEY_ENTER,
};

describe('<ToolTip />', () => {
  let ToolTipComponent = '';
  beforeEach(() => {
    ToolTipComponent = shallow(<ToolTip {...props} />);
  });

  test('should render correctly', () => {
    expect(ToolTipComponent).toMatchSnapshot();
  });

  test('should set width when component is mounted', () => {
    const toolTipDiv = document.createElement('div');
    toolTipDiv.setAttribute('data-tool-tip', 'tooltip');
    document.body.appendChild(toolTipDiv);
    const mountedComponent = mount(<ToolTip {...props} />);
    expect(mountedComponent.length).toEqual(1);
  });

  test('handle events on Tooltip', () => {
    const handleKeyPress = jest.spyOn(ToolTipComponent.instance(), 'handleKeyPress');
    const handleMouseEnter = jest.spyOn(ToolTipComponent.instance(), 'handleMouseEnter');
    const handleMouseLeave = jest.spyOn(ToolTipComponent.instance(), 'handleMouseLeave');
    const handleClick = jest.spyOn(ToolTipComponent.instance(), 'handleClick');

    ToolTipComponent.simulate('mouseEnter');
    expect(handleMouseEnter).toHaveBeenCalled();
    expect(ToolTipComponent.state().isVisible).toBeTruthy();

    ToolTipComponent.simulate('keyPress', event);
    expect(handleKeyPress).toHaveBeenCalled();
    expect(ToolTipComponent.state().isVisible).toBeFalsy();

    ToolTipComponent.simulate('mouseLeave');
    expect(handleMouseLeave).toHaveBeenCalled();
    expect(ToolTipComponent.state().isVisible).toBeFalsy();

    ToolTipComponent.find('span[data-slnm-id="toolTipCTA"]').simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
