import React, { Component } from 'react'
//import { useState } from 'react';
export class CoursesCard extends Component {
  
  render() {
    let {course_name,course_instructor,course_duration,imageUrl,course_id} = this.props;
   // console.log(this.props);
  
 
  
   function handleClick() {
    
    //  console.log("hi");
   }

    return (
      <>
          <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h4 className="card-title">{course_name}</h4>
                        <h6>Instructor: {course_instructor}</h6>
                        <p className="card-text">Duration: {course_duration}</p>
                        <a href="/CourseDetail" onClick={handleClick()}state={{data: this.props}}  className="btn btn-sm btn-primary">Explore Course</a>
                    </div>
                </div>
          </div>  
      </>
    )
  }
}

export default CoursesCard
