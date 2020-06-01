import React from 'react'
import styles from './styles.module.css'
export {default as TextBasic} from './components/TextBasic'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
