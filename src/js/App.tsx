import * as React from 'react';
import {initialTodos, initialHideComplete} from './initialState';
import { TodoArea } from './Components/TodoArea';
import { LightSwitch } from './Components/LightSwitch';
const App = () => {
  const [backgroundColor, setBackgroundColor] = React.useState('#1d2225')
  
  const toggleLights = () => {
    backgroundColor === '#1d2225'
    ? setBackgroundColor('#FFFFFF')
    : setBackgroundColor('#1d2225')
  }

  return (
    <div className="h-screen w-screen" style={{
      backgroundColor: `${backgroundColor}`
    }}>
      <div className="p-8">
        <h1 className="text-6xl font-black text-center mb-8 text-blue-500">Get Things Done</h1>
        <TodoArea 
        initialTodos={initialTodos} 
        initialHideComplete={initialHideComplete} 
        />
        <LightSwitch toggleLightsHandler={toggleLights}/>
      </div>
    </div>
  )
}

export default App;