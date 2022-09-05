import './App.css';
import { ColorExtractor } from 'react-color-extractor';
import {useState, useEffect} from 'react';


function App() {

  const [colors, setColors] = useState([]);

  // useEffect(() =>{
  //   getColors(colors);
  // }, []);

  const getColors = (colors) => {
    setColors (colors);
  }



 console.log('this is colors', colors);
  // console.log('colors in brackets', {colors});
  // console.log('getColor function', getColors);


  return (
    <div className="App">
     
        <h1>React Library: react-color-extractor</h1>

        <ColorExtractor
        //passing in getColors function as a prop to ColorExtractor component 
        getColors={getColors} 
         >
          <img src="https://media.istockphoto.com/photos/beautiful-sunset-over-the-tropical-sea-picture-id1172427455?b=1&k=20&m=1172427455&s=612x612&w=0&h=5e5ZY9KtcF86MolxsA1j_MgylIMjMJqXcqnOONVypO4=" className="sunset" alt="logo" />
      
        </ColorExtractor>
        <h3>This is what is returned from color extractor:</h3>
        <p>{JSON.stringify(colors)}</p>
         
        <h3>Mapping through the colors array:</h3>
         <div>
          {colors.map((color, id) => (
            <div
            key={id}
            className="color-box"
            style={{backgroundColor: color}}
            >
              {color}
            </div>
          ))}
        </div> 

   
    </div>
  );
}

export default App;
