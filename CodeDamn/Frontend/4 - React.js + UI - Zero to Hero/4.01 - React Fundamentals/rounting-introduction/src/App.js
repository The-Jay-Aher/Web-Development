import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import User from './User';


function App() {
	return (
		<BrowserRouter>
			<div>
				{/* For anyone seeing issues trying the hello-world example... you can no longer put in the content in between the opening and closing <react> tags. The content you want is now passed in as jsx through the "element" prop.

          So it's now <Route path="whatever" element={your JSX}/>

          And you can no longer do:
          <Route path="whatever">Your JSX</Route> */}
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
            <li>
              <Link to='/user/jay'>Profile 1</Link>
            </li>
            <li>
              <Link to='/user/xy'>Profile 2</Link>
            </li>
            <li>
              <Link to='/user/codedamn'>Profile 3</Link>
            </li>
            <li>
              <Link to='/user/playground'>Profile 4</Link>
            </li>

					</ul>
				</nav>
				<Routes>
					<Route path='/about' element={<h1>Router About</h1>}/>
					<Route
						path='/'
						element={
							<>
								<h1>I am on the homepage</h1>
								<h2>Hello World</h2>
							</>
						}
					/>
          <Route path='/user/:username' element={<User />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
