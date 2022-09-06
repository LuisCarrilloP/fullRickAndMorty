import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Cards.module.scss'

const Cards = ({ results, page }) => {
  //console.log(results);

  return (
    <>  
      {
        results?.map(result => (
          <Link 
            style={{textDecoration: "none"}}
            to={`${page}${result.id}`} 
            key={result.id} 
            className="col-lg-4 col-md-6 col-12 mb-4 position-relative"
          >
            <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
              <img src={result.image} alt="" className={`${styles.img} img-fluid`}/>
              <div style={{padding: "10px" }} className="content">
                <div className="fs-4 fw-bold mb-2">{result.name}</div>
                <div>
                  <div className="fs-6">Last Location</div>
                  <div className="">{result.location.name}</div>
                </div>   
              </div>
            </div>
            
            {/* IIFE */}
            {(() => {
              if(result.status === "Dead"){
                return(
                  <div className={`${styles.badge} position-absolute badge bg-danger`}>
                    {result.status}
                  </div>
                )
              }else if(result.status === "Alive"){
                return(
                  <div className={`${styles.badge} position-absolute badge bg-success`}>
                    {result.status}
                  </div>
                )
              }else{
                return(
                  <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                    {result.status}
                  </div>
                )
              }
            })()}
          </Link>
        ))
      }
    </>
      
    
    
  )
};

export default Cards;