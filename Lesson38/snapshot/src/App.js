import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import MyImageList from './components/MyImageList';
import {useState} from 'react';

function App() {
  const [images, setImages]=useState([]);
  const getImage = (images) =>{
    setImages(images);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search getImages={(temp)=> getImage(temp)}/>
        <MyImageList images={images}/>
      </header>
    </div>
  );
}

export default App;
