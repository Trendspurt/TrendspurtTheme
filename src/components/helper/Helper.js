import React from "react"

/**
 * DEPRECATED (use getSlots() and childrenWithoutSlots())
 * DEPRECATED (use getSlots() and childrenWithoutSlots())
 * DEPRECATED (use getSlots() and childrenWithoutSlots())
 * DEPRECATED (use getSlots() and childrenWithoutSlots())
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
      let child = props.children.find(item => item.type === id)
      return child ? child.props.children : null
    }
    return;
  }

  ////////////////////////////////////////////////////
  // Slots
  ////////////////////////////////////////////////////

  static getSlots(props, slots) {
    if (!(props.children instanceof Array)) return props;
    // Extract slot contents
    const result = {}
    slots.forEach(id => {
      let child = props.children.find(item => item.type === id)
      result[id] = child ? child.props.children : props[id];
    });
    return result;
  }

  static childrenWithoutSlots(props, slots) {
    if (!(props.children instanceof Array)) return props.children;
    // Convert to real Array
    let children = React.Children.toArray(props.children);
    // Remove slots
    slots.forEach(id => {
      let child = children.find(item => item.type === id)
      child && children.splice( children.indexOf(child), 1 )
    })
    return children;
  }
}