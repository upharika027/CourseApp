import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
   /* let myStyle = {
        background: 'green'
    }*/
    return (
        <>
            <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid" /*style={myStyle}*/>
                                <a href="/Dashboard" className="btn btn-outline-success" type="submit">Dashboard</a>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search"  placeholder="Search course,instructor,etc." aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
            </div>
            
               
        </>
      
    )
  }
}

export default Navbar
