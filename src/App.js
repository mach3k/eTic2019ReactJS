import React from 'react';
import Photo from './components/photo';
import './App.css';

function App() {
  const imageData = {
    src: "https://github.com/mach3k/cloneInsta/blob/master/src/components/paisagem.jpg?raw=true",
    user: {
      name: "Marcelo Ramos Machado",
      profile_image: "https://avatars0.githubusercontent.com/u/8934055?s=460&v=4",
      link: "https://github.com/mach3k"
    }
  }

  return (
      <div className="App">
      <Photo {...imageData}/>
      </div>
  );
}
export default App;