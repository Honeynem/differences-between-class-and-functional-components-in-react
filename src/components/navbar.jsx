import React, { Component } from 'react'

class Navbar extends Component{
    render() {
        return (
            <nav className='navbar navbar-light bg-light'>
                <div className='container-fluid'>
                    <a hret='#' className='nav-bar-brand'>
                        Navbar {this.calculateSum()}
                    </a>
                </div>

            </nav>
        )
    }

    calculateSum = ()=>{
        let sum = 0;
        this.props.products.forEach(p => { sum += p.count;});
        return sum;
    }
    
}
export default Navbar;