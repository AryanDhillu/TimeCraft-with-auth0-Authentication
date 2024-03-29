// import Makeschedule from "./components/Makeschedule";
import Table from "./components/Table";
import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { useAuth0 } from "@auth0/auth0-react";
import Errorpage from "./components/Errorpage";
import Pleaselogin from "./components/Pleaselogin";
import Nodata from "./components/Nodata";
// import BeData from "./components/BeData";
import Mergeroute from "./components/MergeRoute";


function App() {

const [data,setData] = useState([])
const { loginWithRedirect, isAuthenticated, user } = useAuth0();
const [bol, setbol] = useState(false)
const [predata, setPredata] = useState(false)




const search_for_data = async() => {
    const resi = await fetch('http://localhost:5000/slots',{
      method : 'GET',
      header : {
        'Content-type' : 'application/json',
      },
    })
    const data1 = await resi.json()

    let hasData = false;
    for (const i of data1) {
      if (user){
      if (i.userId === user.sub) {
        hasData = true;
        break;
      }
     }
    }

    setPredata(hasData)
  }

 

const get_data = async() => {
    const resi = await fetch('http://localhost:5000/slots',{
      method : 'GET',
      header : {
        'Content-type' : 'application/json',
      },
    })
    const data1 = await resi.json()

    let urll = "http://localhost:5000/slots"

    for (const i of data1){
      if (user){
      if (i.userId === user.sub){
        urll = `http://localhost:5000/slots/${i.id}`
        setbol(true)
        break
      }
     }
    }

    const res = await fetch(urll,{
      method : "GET",
      header : {
        'Content-type' : 'application/json',
      }
    })
    const data2 = await res.json()
    setData(data2)
  }


  // setData(data1)
  // // console.log(data1)
  

  
// in below line 12 the /6937 should be replaced by the id on json specified resourse that is to replace
// it works fine with POST but to replace we need to use the PUT which changes the whole thing
// u can use string literal like `http://localhost:5000/tasks/${id}`.


const newslots = async(sloty) => {

  const resi = await fetch('http://localhost:5000/slots',{
    method : 'GET',
    header : {
      'Content-type' : 'application/json',
    },
  })
  const data1 = await resi.json()

  let methodd = "POST"
  let urll = "http://localhost:5000/slots"

for(const i of data1){
  if (user){
  if (i.userId === user.sub){
    methodd = "PUT"
    urll = `http://localhost:5000/slots/${i.id}`;
    break;
  }
 } 
}
  const res = await fetch(urll,{
    method : methodd,
    header : {
      'Content-type' : 'application/json',
    },
    body : JSON.stringify(sloty)
  })
  const data = await res.json()
}




  return (
    <Router>
      <Navbar set_data={get_data} check_data={search_for_data}/>
      <Routes>  
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/makeschedule" element={<Mergeroute isAuthenticated={isAuthenticated} predata={predata} newslots={newslots} get_data={get_data} search_for_data={search_for_data} />} />
        <Route exact path="/viewschedule" element={isAuthenticated ? bol ? <Table data={data} /> : <Nodata/> : <Pleaselogin/>}/>
        <Route  path="*" element={<Errorpage/>}/>
      </Routes>
    </Router>



    // <>
    // <Navbar />
    // {/* // <Makeschedule onAdd={newslots}/> */}
    // <Table data={data}/>
    // </>
  );
}

export default App;
