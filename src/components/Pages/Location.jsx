import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import InputGroup from '../Filters/Category/InputGroup';

const Location = () => {

  const [ id, setId ] = useState(1)
  const [ info, setInfo ] = useState([])

  const [ results, setResults ] = useState([])

  /* useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then(res => setInfo(res.data))
  }, [ id ]) */

  const api = `https://rickandmortyapi.com/api/location/${id}`
  let { type, name, dimension } = info
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setInfo(data)

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then(res => res.json())
        })
      )
      setResults(a)
    })()
  }, [ api ])

  return (
    <div className='container'>
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Location - <span className="text-primary">
                      "{name === "" ? "Unknown" : name }"
                    </span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">
          Type: {type === "" ? "Unknown" : type}
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center-mb-4">Pick Location</h4>
          <InputGroup total={126} name="Location" setId={setId}/>
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards results={results} page="/location/"/>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Location;