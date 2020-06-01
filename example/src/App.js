import React from 'react'

import { ExampleComponent } from 'trendspurt-theme'
import { TextBasic } from 'trendspurt-theme'
import 'trendspurt-theme/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <TextBasic text="Fight fire with fire"></TextBasic>
    </div>
  )
}

export default App
