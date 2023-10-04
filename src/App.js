import "./App.css"
import { Route,Routes } from "react-router"
import Home from "./components/Home"
import Property from "./components/Property.jsx"
export default function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={[<Home/>]}/>
      <Route path="/property/:id" element={[<Property/>]}/>
    </Routes>
    </>
  )
}