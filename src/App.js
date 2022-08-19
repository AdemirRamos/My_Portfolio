import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Main from './Components/main'
import Projects from './Components/projects'
import Page2 from './Components/page2'

export default function App() {
  return(

    <>

      <Router>

      	<Routes>

      		<Route path="/My_Portfolio/" element={<Main/>}/>
      		<Route path="/My_Portfolio/projects/" element={<Projects/>}/>
          <Route path="My_Portfolio/page2/" element={<Page2/>}/>

      	</Routes>

      </Router>

    </>

  )
}
