//import Routes from './Components/routes'
import Main from './Components/main'
import Projects from './Components/projects'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return(

    <>

      <Router>

      	<Routes>

      		<Route path="/My_Portfolio/" element={<Main/>}/>
      		<Route path="/My_Portfolio/projects/" element={<Projects/>}/>

      	</Routes>

      </Router>

    </>

  )
}
