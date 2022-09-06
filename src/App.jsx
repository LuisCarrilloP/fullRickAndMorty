import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Filters from './components/Filters/Filters'
import Cards from './components/Cards/Cards'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './components/Pagination/Pagination'
import Search from './components/Search/Search'
import Navbar from './components/Nabvar/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episodes from './components/Pages/Episodes'
import Location from './components/Pages/Location'
import CardDetails from './components/Cards/CardDetails'

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetails/>}/>

        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/episodes/:id" element={<CardDetails/>}/>

        <Route path="/location" element={<Location/>}/>
        <Route path="/location/:id" element={<CardDetails/>}/>
      </Routes>
    </Router>
  )
}

const Home = () => {

  const [ pageNumber, setPageNumber ] = useState(1)
  const [ episode, setEpisode ] = useState([])
  const [ search, setSearch ] = useState("")
  
  //filter
  const [ status, setStatus ] = useState("")
  const [ gender, setGender ]  = useState("")
  const [ species, setSpecies ] = useState("")

  //const { info, results } = episode

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`)
      .then(res => setEpisode(res.data))
  }, [ pageNumber, search, status, gender, species ])
  

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search search={search} setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div className="container">
        <div className="row">
          
          
            <Filters
              setSpecies={setSpecies}
              setGender={setGender} 
              setStatus={setStatus} 
              setPageNumber={setPageNumber}
            />
          
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards results={episode.results} page="/"/>
            </div>
          </div>

        </div>
      </div>

      <Pagination info={episode.info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  )
}

export default App
