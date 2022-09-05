import './App.css';
import { ColorExtractor } from 'react-color-extractor';
import {useState} from 'react';


function App() {

  const [colors, setColors] = useState([]);

  const getColors = (colors) => {
    setColors(colors);
    // getColors ={colors => console.log(colors)}
  }


  return (
    <div className="App">
      <header className="Kelsey">
        <h1>React Library: react-color-extractor</h1>
        <ColorExtractor
        getColors={colors => console.log('colors', colors)}
         >
          <img src="https://media.istockphoto.com/photos/beautiful-sunset-over-the-tropical-sea-picture-id1172427455?b=1&k=20&m=1172427455&s=612x612&w=0&h=5e5ZY9KtcF86MolxsA1j_MgylIMjMJqXcqnOONVypO4=" className="sunset" alt="logo" />
        </ColorExtractor>
        <button>Get colors!</button>  
            
      </header>
    </div>
  );
}

export default App;
