import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About/About'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Book from "./routes/book/Book"
import Singlebooks from "./routes/book/Singlebooks"
import CreateBook from './routes/book/CreateBook'
import Editbook from './routes/book/Editbook'

const App = () => {
  return (
    <div>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/books' element={<Book/>}></Route>
            <Route path='/books/:slug' element={<Singlebooks/>}></Route>
            <Route path='/createbook' element={<CreateBook/>}></Route>
            <Route path='/editbook/:slug' element={<Editbook/>}></Route>
          </Routes>
          <Footer/>
        </Router>
    </div>
  )
}

export default App