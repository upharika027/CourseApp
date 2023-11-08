import React from 'react'

export default function Dashboard() {
 
  let myStyle ={
    width: "25%"
  }

  return (
    <div>
        <div className="header bg-tertiary pb-6">
            <div className="container-fluid">
                <div className="header-body">
                  <div className="row align-items-center py-4">
                    <div className="col-lg-6 col-7">
                        <h6 className="h2 d-inline-block mb-0">Your Enrolled Courses</h6>
                        
                    </div>
                
                </div>

                <div className="row">
                <div className="col-xl-3 col-md-6">
                <div className="card card-stats">

                <div className="card-body">
                <div className="row">
                <div className="col">
                <h6 className="card-title text-uppercase text-muted mb-0">Instructor: Joe</h6>
                <span className="h2 font-weight-bold mb-0">JAVA</span>
                </div>
                <div className="col-auto">
                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                <i className="ni ni-active-40"></i>
                </div>
                </div>
                </div>
                <div className="progress my-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success" style={myStyle}>25%</div>
                  </div>
                  <div>
                    <button className="btn btn-success">Mark as completed</button>
                  </div>
                </div>
                </div>
                </div>
                <div className="col-xl-3 col-md-6">
                <div className="card card-stats">

                <div className="card-body">
                <div className="row">
                <div className="col">
                <h6 className="card-title text-uppercase text-muted mb-0">INSTRUCTOR: JOE</h6>
                <span className="h2 font-weight-bold mb-0">React JS</span>
                </div>
                <div className="col-auto">
                <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                <i className="ni ni-chart-pie-35"></i>
                </div>
                </div>
                </div>
                <div className="progress my-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success" style={myStyle}>25%</div>
                  </div>
                  <div>
                    <button className="btn btn-success">Mark as completed</button>
                  </div>
                </div>
                </div>
                </div>
                <div className="col-xl-3 col-md-6">
                <div className="card card-stats">

                <div className="card-body">
                <div className="row">
                <div className="col">
                <h5 className="card-title text-uppercase text-muted mb-0">INSTRUCTOR: JOE</h5>
                <span className="h2 font-weight-bold mb-0">C++</span>
                </div>
                <div className="col-auto">
                <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                <i className="ni ni-money-coins"></i>
                </div>
                </div>
                </div>
                <div className="progress my-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success" style={myStyle}>25%</div>
                  </div>
                  <div>
                    <button className="btn btn-success">Mark as completed</button>
                  </div>
                </div>
                </div>
                </div>
                <div className="col-xl-3 col-md-6">
                <div className="card card-stats">

                <div className="card-body">
                <div className="row">
                <div className="col">
                <h5 className="card-title text-uppercase text-muted mb-0">INSTRUCTOR: JOE</h5>
                <span className="h2 font-weight-bold mb-0">Python</span>
                </div>
                <div className="col-auto">
                <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                <i className="ni ni-chart-bar-32"></i>
                </div>
                </div>
                </div>
                <div className="progress my-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success" style={myStyle}>25%</div>
                  </div>
                  <div>
                    <button className="btn btn-success">Mark as completed</button>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
    </div>
  )
}
