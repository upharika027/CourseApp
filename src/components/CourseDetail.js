import React, { useLayoutEffect } from 'react'

export default function CourseDetail(props) {
  return (
    <>  
    <div>
        <div className="container-fluid">
             <div className="row content">
                <div className="col-sm-9">
                    <h2>Introduction to React Native <button type="button" class="btn btn-outline-success">Enroll</button></h2><br/>
                    <h5><span className="glyphicon glyphicon-time"></span> Instructor: John Doe</h5><br/>
                    <h5><span className="label label-danger">Duration: 8 weeks</span></h5><br/>
                    <h5>Description:</h5><p> Learn the basics of React Native development and build your first mobile app.</p>
                    <h5><span className="label label-danger">Enrollment Status: Open</span></h5><br/>
                    <h5><span className="label label-danger">Schedule: Tuesdays and Thursdays, 6:00 PM - 8:00 PM</span></h5><br/>
                    <h5><span className="label label-danger">Location::Online</span></h5><br/>
                    <h5><span className="label label-danger">Pre-requisites: </span></h5><br/>
                     <ul>
                        <li>Basic JavaScript knowledge</li>
                        <li>Familiarity with React</li>
                     </ul>
                     <h5><span className="label label-danger">Syllabus: </span></h5><br/>
                        <ul>
                          <li>Introduction to React Native</li>
                          <li>Building Your First App</li>
                        </ul>
                    
                    <br/><br/>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}
