import React from 'react'
import Helper from '../helper/Helper';

export default function SlotDemo(props) {
  const slotNames = ['xxx']
  const slots = Helper.getSlots(props, slotNames);
  return (
    <div>
      {/* {props.children} */}
      {Helper.childrenWithoutSlots(props, slotNames)}
      <hr></hr>
      {slots.xxx}
    </div>
  )
}