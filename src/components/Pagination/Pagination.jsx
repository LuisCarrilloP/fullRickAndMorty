import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

  const [ width, setWidth ] = useState(window.innerWidth)
  const updateDimension = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimension)
    return () => window.removeEventListener("resize", updateDimension)
  },[])

  /* const next = () => {
    setPageNumber(x => x + 1)
  }
  const prev = () => {
    if(pageNumber === 1) return
    setPageNumber(x => x - 1)
  } */

  return (
    <>
      <style jsx>
        {`
        @media (max-width: 768px){
          .prev, .next{
            display: none
          }
          .pagination{
            font-size: 13px
          }
        }
        `}
      </style>
      <ReactPaginate 
        className='pagination justify-content-center gap-2 my-4'
        previousLabel="Prev"
        previousClassName="btn btn-primary prev"
        nextLabel="Next"
        nextClassName="btn btn-primary next"
        pageCount={info?.pages}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        onPageChange={(data) => {setPageNumber(data.selected + 1)}}
        activeclassname="active"
        forcePage={pageNumber===1 ? 0 : pageNumber-1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
      />
    </>
    );
  };
  
  export default Pagination;
  
  {/* <div className='container d-flex justify-content-center gap-5 my-5'>
    <button onClick={prev} className="btn btn-primary">Prev</button>
    <button onClick={next} className="btn btn-primary">Next</button>
  </div> */}