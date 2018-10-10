/**
* @Description:
    This file has utilities for geting lables.

    method : getLabel - To get label string

    @param {Object} - labelState parameter, which is a refrence of label object from store
    @param {String} - labelkey parameter, a string identifier
    @param {Array} -  placeholderValues parameter, an array having string values to assign dynamic values

    @return {String} - Returns a string

    Sample Usage:

       LabelsUtil.getLabel(labels, 'header.headingText')
*
*/

const LabelsUtil = {
  /**
   * Get the label by key
   * @param  {object} labelState - The label state object that contains the label
   * @param  {string} labelKey - The key to look up the value in the label state
   * @return {string} - The value of the label.  If value is undefined, the passed in label key is returned.
   */
  getLabel(labelState, labelKey) {
    let labelValue = labelKey;
    const updatedLabel = labelValue.split('.');
    let label = labelState;
    updatedLabel.forEach((newLabelKey) => {
      label = label ? label[newLabelKey] : '';
    });
    if (labelState && typeof label === 'string') {
      labelValue = label;
    }
    return labelValue || labelKey;
  },
};

export default LabelsUtil;
