/**
 * Component Helper Functions (by Simon Widjaja)
 */
export default class {
  /**
   * Get slot content
   * @param {object} props React props object
   * @param {string} id Slot id 
   */
  static getSlot(props, id) {
    return props.children.find(item => item.type === id).props.children
  }
}