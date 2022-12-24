import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Head from './components/Head';
import Card from './components/Card';
import Items from './components/Items';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Onecard from './components/Onecard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from './components/pages/First';
import Single from './components/pages/Single';
import Loginin from './components/pages/Loginin';
import Regis from './components/pages/Regis';
import Addtocart from './components/pages/Addtocart';
import Profileee from './components/pages/Profileee';
import { personcontext } from './context/Personcontext';



function App() {
  const [person, setperson] = useState({})
  const [data, setdata] = useState()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(resp => resp.json())
      .then(response => setdata(response))
  }, [])
  console.log("data===>", data)

  const [storage, setstorage] = useState(JSON.parse(localStorage.getItem("itemscart")) || [])
  //  console.log(storage)

  const cut = (fd) => {
    console.log("dddd===>", fd)
    setstorage([
      ...storage,
      fd
    ])
    console.log("dfdfd===>", storage)
  }

  useEffect(() => {
    localStorage.setItem("itemscart", JSON.stringify(storage))

  }, [storage])

  const erase = (did) => {
    console.log("qqq==>", did)
    const space = storage.filter((fil) => {
      return fil?.id!= did
    })
    console.log(space)
    setstorage(space)

  }





  const oncat = (catdata) => {
    console.log(catdata)
    fetch(`https://fakestoreapi.com/products/category/${catdata}`)
      .then(res => res.json())
      .then(json => setdata(json))



  }

  return (
    <personcontext.Provider value={{person,setperson}}>

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<First data={data} catdat={oncat} ecut={cut} />} />
          <Route path="/single/:val" element={<Single ecut={cut} />} />
          <Route path="/login" element={<Loginin />} />
          <Route path="/reg" element={< Regis />} />
          <Route path="/cart" element={<Addtocart storage={storage} erase={erase} />} />
          <Route path="/pro" element={<Profileee />} />


        </Routes>
      </BrowserRouter>

    </div>
    </personcontext.Provider>

  );
}

export default App;