import React from "react"

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
    if (props.children instanceof Array) {
      let children = props.children.find(item => item.type === id).props.children
      return children
    }
    return false;
  }

  static getSlots(props, slots) {
    if (!(props.children instanceof Array)) return {};
    // Extract slot contents
    const result = {}
    slots.forEach(id => {
      let child = props.children.find(item => item.type === id)
      result[id] = child.props.children;
    });

    
    return result;
  }

  static childrenWithoutSlots(props, slots) {
    if (!(props.children instanceof Array)) return props.children;
    // Convert to real Array
    let children = React.Children.toArray(props.children);
    // Remove slots
    slots.forEach(id => {
      let child = props.children.find(item => item.type === id)
      children.splice( 1, 1 )
    })
    return children;
  }
}