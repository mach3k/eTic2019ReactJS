import React from 'react';
import Photo from './components/photo';
import Coment from './components/coment';
import './App.css';

function App() {
  const imageData = {
    src: "https://raw.githubusercontent.com/mach3k/eTic2019ReactJS/master/paisagem.jpg",
    user: {
      name: "Marcelo Ramos Machado",
      profile_image: "https://avatars0.githubusercontent.com/u/8934055?s=460&v=4",
      link: "https://github.com/mach3k"
    }
  }

  return (
      <div className="App">
      <Photo {...imageData}/>
      <Coment />
      </div>
  );
}
export default App;