import React, {useRef, useEffect} from 'react';

function App() {
  const element = useRef(null);

  useEffect(() => {
    element.current.focus();
  }, []);
  
  return (
    <div>
     <div className='target' ref={element} />
    </div>
  );
}

export default App;
