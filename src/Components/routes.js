import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

import Main from './main'
import Projects from './projects'

const Routes = () => {
	return(

		<BrowserRouter>

			<Route component = {Main} path="/"/>
        	<Route component = {Projects} path="/projects"/>

      	</BrowserRouter>

	)
}

export default Routes
