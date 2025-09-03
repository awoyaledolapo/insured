import{Routes,Route} from 'react-router-dom'
import Layout  from './Components/Shared/Layout'
import Home  from './Pages/Home' 
import About  from './Pages/About' 
import './App.css'
 
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      

      </Route>
    </Routes>
      
    </>
  )
}

export default App
