import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ColorBox from '../Components/ColorBox';

const colorList = [
    'red',
    'green',
    'black',
    'yellow',
    'pink',
    'purple'
]

let nextId = 0;

function Color(){

    const [color, setColor] = useState('No color selected')
    const [data, setData] = useState([
        'red',
        'green',
        'black',
        'yellow',
        'pink',
        'purple'
    ])

    const colorHandler = (nameColor) => {
        if(nameColor === color) {
            setColor('No color selected')
        } else 
            setColor(nameColor)
    }

    const [name, setName] = useState('');
    const [artists, setArtists] = useState(colorList);

    const AddColor = () => {
       data.push('green')
    }

    return (
        <div style={{"text-align": "center", margin:60}}>
            <div>
                <button onClick={AddColor}>Add color</button>
            </div>
            <div className='nameColor'>
                <h3 style={{fontFamily:'ubuntu'}}>{color}</h3>
            </div>
            <div style={{"display": 'flex', alignItems:'center', justifyContent:'space-between'}}>
                {
                    artists.map((color, index) => {
                        return(
                           <ColorBox key={index} colorHandler={colorHandler} colorName={color}/> 
                        )
                    })
                }
            </div>
       </div>
    )
  }
  
export default Color
