import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const CardDetails = () => {
  
  const { id } = useParams()
  const [ data, setData ] = useState({})

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => setData(res.data))
  }, [])

  return (
    <div className='container d-flex justify-content-center'>
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{data.name}</h1>
        <img src={data.image} alt="" className='img-fluid'/>
        
        {(() => {
              if(data.status === "Dead"){
                return(
                  <div className="badge bg-danger fs-5">
                    {data.status}
                  </div>
                )
              }else if(data.status === "Alive"){
                return(
                  <div className="badge bg-success fs-5">
                    {data.status}
                  </div>
                )
              }else{
                return(
                  <div className="badge bg-secondary fs-5">
                    {data.status}
                  </div>
                )
              }
        })()}

        <div className="content">
          <div className="">
            <span className="fw-bold">Gender: </span>{data.gender}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>{data.species}
          </div>
          <div className="">
            <span className="fw-bold">Type: </span>{data.type === "" ? "Unknown" : data.type}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>{data.location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>{data.origin?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;