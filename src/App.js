// import './App.css';
// import {useState, useEffect} from 'react'

// const itemsApi = () => 
//   new Promise(function(resolve, reject){
//     setTimeout(() => {
//       resolve([
//         { groupId: 1, nombre: 'Marco'}, 
//         { groupId: 2, nombre: 'Marco2'}, 
//         { groupId: 3, nombre: 'Marco3'}, 
//         { groupId: 4, nombre: 'Marco4'}, 
//         { groupId: 5, nombre: 'Marc5'}, 
//         { groupId: 5, nombre: 'Marc54'}, 
//       ])
//     }, 500)
//   })


// function App() {

//   const [datos, setDatos] = useState({})

//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState([])
//   const [dataJson, setDatajson] = useState({})

//   const  getData = async () => {
//     const url = 'https://randomuser.me/api';
//     await fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.results)
//      setData(data.results)
//     })
//     .catch(err => {
//       alert(err)
//     })
//   }

//   useEffect(() => {
//     itemsApi().then((res) => {
//       let result = res.reduce((acc, curr) => {
//         if(!acc[curr.groupId]) {
//           acc[curr.groupId] = [curr]
//         }else {
//           acc[curr.groupId].push(curr) 
//         }
//         return acc
//       }, {})
//       setDatos(result)
      
//     })
  
  
//   }, [])
  


//   return (
//     <div className="App">
//       <p>{counter}</p>
//       <button onClick={() => {
//         setCounter(counter +1)
//       }
//       }>Increase counter</button>
//       <div>
//         <p>Fetch Data</p>
//         <button onClick={getData}>Get Data</button>
//         {
//           data.map((item) => {
//             return(
//               <div key={item.gender}>
//                 <p>{item.gender} </p>
//                   <p>{item.name.first} {item.name.last} </p>
              
//                 <p>{item.location.street.number} </p>
//                 <p>{item.location.city} </p>
//                 <img src={item.picture.large} />
                
//               </div>
             
//             )
//           })
//         }
//       </div>
//       <div>
//         {
//           Object.keys(datos).map((key, index) => (
//             <div key={index}>
//                <h4>group: {key}</h4>
//                <ul>
//                 {
//                   datos[key].map((item, index) => (
//                     <li>{item.nombre}</li>
//                   ))
//                 }
//                </ul>
//             </div>
           
            
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Color from './Pages/Color';
import Home from './Pages/Home'
import Test from './Pages/Test'
import Code from './Pages/Code'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/test' >
          <Route path=':id' element={<Test />} />
        </Route>
        <Route path='/color' element={<Color />}/>
        <Route path='/code' element={<Code />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;