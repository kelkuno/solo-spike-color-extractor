import './App.css';
//✅import ColorExtractor component from library
import { ColorExtractor } from 'react-color-extractor';
import {useState} from 'react';
import { ChromePicker } from 'react-color';


function App() {
  //✅set a local "colors" which is a local state w default state as empty array.
  const [colors, setColors] = useState([]);
  const [stageColor, setStageColor] = useState('#fff');

  //✅declared a getColors function that takes in props of "colors" and adds it too colors array.
  const getColors = (colors) => {
    setColors (colors);
  }

  //function that changes stageColor with the color picker
  const handleColorChange = (color) => {
    setStageColor(color.hex);
  }//end of colorChange

 console.log('this is colors', colors);
 console.log('this is stageColor', stageColor);

  // console.log('colors in brackets', {colors});
  // console.log('getColor function', getColors);

  return (
    <div className="App">
     
        <h1>React Library: react-color-extractor</h1>
        {/*✅ wrapped the image in the ColorExtractor component (per instructions) */}
        <ColorExtractor
        //✅passing in getColors function as a prop to ColorExtractor component 
        getColors={getColors} 
        //✅maxColors is also a prop passed in, tells the component how many colors to base the palette sample on. 
        maxColors={256}
         >
          <img src="https://media.istockphoto.com/photos/beautiful-sunset-over-the-tropical-sea-picture-id1172427455?b=1&k=20&m=1172427455&s=612x612&w=0&h=5e5ZY9KtcF86MolxsA1j_MgylIMjMJqXcqnOONVypO4=" className="sunset" alt="logo" />
      
        </ColorExtractor>
        {/* ✅see DOM for visual */}
        <h3>This is what is returned from color extractor:</h3>
        <p>{JSON.stringify(colors)}</p>
         
        <h3>Mapping through the colors array:</h3>
         <div className="container">
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
        <ChromePicker
        color={stageColor}
        onChange ={handleColorChange}
        disableAlpha={true}
        />;
  
    </div>
  );
}

export default App;
