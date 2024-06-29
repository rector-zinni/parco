
import './App.scss';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import fire, { firestore } from './fire'

function App() {
  //useeffect 
  const[roomStructure,setRoomStructure]=useState([]);
  const[flatLocation,setFlatLocation]=useState('')
  const[roomType,setRoomType]=useState('')
  const[acType,setAcType]=useState('')
  const[gasType,setGasType]=useState('')
  const[acDesc,setAcDesc]=useState('')
  const[serviceDate,setServiceDate]=useState('')


  useEffect(()=>{

  },[roomStructure])

  //data
  const airCondition=[
    {name:'Panasonic'},
    {name:'Carrier'},
    {name:'Daikin'},
    {name:'Scanfrost'},
    {name:'Hisense'},
    {name:'Medea'},
  ]
  const location=[
    {
      name:'22 Point Road',
      room_structure:{
        palourAC1:'Palour AC1',
        palourAC2:'Palour AC2',
        kitchenAC:'Kitchen AC',
        room1AC:'Room1 AC',
        room2AC:'Room2 AC',
        room3AC:'room3 AC',
        room4AC:'room4 AC',
      }
    },
    {
      name:'Central Avenue',
      room_structure:{
        palourAC1:'Palour AC1',
        palourAC2:'Palour AC2',
        kitchenAC:'Kitchen AC',
        room1AC:'Room1 AC',
        room2AC:'Room2 AC',
        room3AC:'room3 AC',
        room4AC:'room4 AC',
      }
    },
    {
      name:'1 Park Cloase',
      room_structure:{
        palourAC1:'Palour AC1',
        palourAC2:'Palour AC2',
        room1AC:'Room1 AC',
        room2AC:'Room2 AC',
        room3AC:'room3 AC',
        
      }
    
    },
    {
      name:'7 Park Cloase',
      room_structure:{
        palourAC1:'Palour AC1',
        room1AC:'Room1 AC',
        room2AC:'Room2 AC',
        room3AC:'room3 AC',
      }
    },
    {
      name:'6 Bathurst',
      room_structure:{
        palourAC1:'Palour AC1',
        room1AC:'Room1 AC',
        room2AC:'Room2 AC',
      }
    },
    {
      name:'12 Bathurst',
      room_structure:{
        palourAC1:'Palour AC1',
        room1AC:'Room1 AC',
        room2AC:'Room2 AC',
      }
    
    },
    {name:'Degema',
    room_structure:{
      palourAC1:'Palour AC1',
      room1AC:'Room1 AC',
      room2AC:'Room2 AC',
    }
    },
    {
      name:'Danfodio',
      room_structure:{
        palourAC1:'Palour AC1',
        room1AC:'Room1 AC',
        room2AC:'Room2 AC',
      }
    },
  ]

  //functions
   const addAc=async ()=>{
const data ={
  location:flatLocation,
  room_type:roomType,
  ac_type:acType,
  gas:gasType,
  description:acDesc,
last_service_date:serviceDate
}
await setDoc(doc(firestore, "cities", "LA"), data).then(()=>{
  alert('AC added')
});
  }
  const changeRoomStructure=(event)=>{
    //alert(event.target.value)
    if(event.target.value!=='location'){
const newLocation=location.filter((place)=>{
  return place.name===event.target.value
})

const oldLocation=newLocation[0].room_structure;
console.log(oldLocation)
setRoomStructure(oldLocation)
    }else{
      alert('choose location')
    }
  }
  const convertToString = (value) => {
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }
    return value;
  };
  return (
    <div className="app">
     <div className="header">
    <div className="logo">
      <img src="https://dash.infinityfree.com/images/logo.svg" alt="" />
    </div>
    <div className="link">
<ul>
  <li><Link className='nav-link'>Home</Link></li>
  <li><Link className='nav-link'>Home</Link></li>
</ul>
    </div>
     </div>
     <div className="content-container">
          <form>
            <div className="form-header">
              <img src="https://dash.infinityfree.com/images/logo.svg" alt="" srcset="" />
            </div>
          <div className="textbox">
            <select 
            name=""
             id="" 
             value={flatLocation}
             onChange={
              (event)=>{
                changeRoomStructure(event)
                setFlatLocation(event.target.value);
              }
             }>
              <option value="location">location</option>
              {location.map((data=>(
                <option key={data.name}>{data.name}</option>
              )))}
            </select>
            </div>  
            <div className="textbox">
            <select 
            name="" 
            id=""
            value={roomType}
            onChange={(event)=>{
              setRoomType(event.target.value)
            }}
            >
              <option value="">Room Type</option>
               {Object.entries(roomStructure).map(((key,value)=>(
                <option value={key[1]} key={key}>{key[1]}</option>
              )))} 
            </select>
            </div>  

            <div className="textbox">
            <select
             name=""
              id=""
              value={acType}
              onChange={(event)=>{
                setAcType(event.target.value)
              }}
              >
              <option value="">AC Type</option>
               {airCondition.map(((data)=>(
                <option value={data.name} key={data}>{data.name}</option>
              )))} 
            </select>
            </div>  
            <div className="textbox">
            <select
             name=""
              id=""
              value={gasType}
              onChange={(event)=>{
                setGasType(event.target.value)
              }}
              >
              <option value="">Gas Type</option>
              <option value="R22">R22</option>
              <option value="R410">R410</option>
              
            </select>
            </div> 

            <div className="textbox">
              <textarea
               name="" 
               id=""
              placeholder='note about air condition...'
              value={acDesc}
              onChange={(event)=>{
                setAcDesc(event.target.value)
              }}
                
                ></textarea>
            </div>

            <div className="textbox">
              <input
               type="date"
                name="" 
                id=""
                value={serviceDate}
                onChange={(event)=>{
                  setServiceDate(event.target.value)

                }}
                />
            </div>
            <div className="textbox">
              <button
              onClick={addAc}
              type='button'
              >Add</button>
            </div>
          </form>
     </div>
    </div>
  );
}

export default App;
