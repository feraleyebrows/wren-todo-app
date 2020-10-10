import * as React from 'react';

interface Props {
  toggleLightsHandler: Function
}

export const LightSwitch = ({toggleLightsHandler}: Props) => {

  const toggleLights = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    toggleLightsHandler();
  }

  return(<div className="flex justify-center">
      <button onClick={toggleLights} className="btn btn-blue mt-6">Light Switch</button>
  </div>)
}