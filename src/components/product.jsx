import React, { Component } from 'react'
class Product extends React.Component {
    render(){
        return (
        <>
           <span  className='m-2 text-info'>product name</span>
           <span className='m-2 badge bg-primary'>2</span>
           <button className='m-2 btn btn-sm btn-success'>+</button>
           <button className='m-2 btn btn-sm btn-warning'>-</button>
           <button className='m-2 btn btn-sm btn-danger'>delete</button>
        </>
        )
    }
}
export default Product;