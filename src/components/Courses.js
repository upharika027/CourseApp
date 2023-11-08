import React, { Component } from 'react'
import CoursesCard from './CoursesCard'
export class Courses extends Component {
   
   
    courses = [
        {
            "id": 1,
            "name": "Introduction to React Native",
            "instructor": "John Doe", 
            "description": "Learn the basics of React Native development and build your first mobile app.",
            "enrollmentStatus": "Open",
            "thumbnail": "your.image.here", 
            "duration": "8 weeks", 
            "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
            "location": "Online",
            "prerequisites": ["Basic JavaScript knowledge', 'Familiarity with React"],
            "syllabus": [
                {
                    "week": 1,
                    "topic": "Introduction to React Native",
                    "content":" Overview of React Native, setting up your development environment."
                },
                {
                    "week": 2,
                    "topic": "Building Your First App",
                    "content": "Creating a simple mobile app using React Native components."
                }
            ],
            "students": [
                {
                    "id": 101,
                    "name": "Alice Johnson",
                    "email": "alice@example.com"
                },
                {
                    "id": 102,
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                }
        
              ]
        },
        {
            "id": 2,
            "name": "Introduction to JAVA",
            "instructor": "Doe", 
            "description": "Learn the basics of React Native development and build your first mobile app.",
            "enrollmentStatus": "Open",
            "thumbnail": "your.image.here", 
            "duration": "8 weeks", 
            "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
            "location": "Online",
            "prerequisites": ["Basic JavaScript knowledge', 'Familiarity with React"],
            "syllabus": [
                {
                    "week": 1,
                    "topic": "Introduction to React Native",
                    "content":" Overview of React Native, setting up your development environment."
                },
                {
                    "week": 2,
                    "topic": "Building Your First App",
                    "content": "Creating a simple mobile app using React Native components."
                }
            ],
            "students": [
                {
                    "id": 101,
                    "name": "Alice Johnson",
                    "email": "alice@example.com"
                },
                {
                    "id": 102,
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                }
        
              ]
        },
        {
            "id": 3,
            "name": "Introduction to C++",
            "instructor": "Marshal", 
            "description": "Learn the basics of React Native development and build your first mobile app.",
            "enrollmentStatus": "Open",
            "thumbnail": "your.image.here", 
            "duration": "8 weeks", 
            "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
            "location": "Online",
            "prerequisites": ["Basic JavaScript knowledge', 'Familiarity with React"],
            "syllabus": [
                {
                    "week": 1,
                    "topic": "Introduction to React Native",
                    "content":" Overview of React Native, setting up your development environment."
                },
                {
                    "week": 2,
                    "topic": "Building Your First App",
                    "content": "Creating a simple mobile app using React Native components."
                }
            ],
            "students": [
                {
                    "id": 101,
                    "name": "Alice Johnson",
                    "email": "alice@example.com"
                },
                {
                    "id": 102,
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                }
        
              ]
        },
        {
            "id": 4,
            "name": "Introduction to HTML/CSS",
            "instructor": "Carryminati", 
            "description": "Learn the basics of React Native development and build your first mobile app.",
            "enrollmentStatus": "Open",
            "thumbnail": "your.image.here", 
            "duration": "8 weeks", 
            "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
            "location": "Online",
            "prerequisites": ["Basic JavaScript knowledge', 'Familiarity with React"],
            "syllabus": [
                {
                    "week": 1,
                    "topic": "Introduction to React Native",
                    "content":" Overview of React Native, setting up your development environment."
                },
                {
                    "week": 2,
                    "topic": "Building Your First App",
                    "content": "Creating a simple mobile app using React Native components."
                }
            ],
            "students": [
                {
                    "id": 101,
                    "name": "Alice Johnson",
                    "email": "alice@example.com"
                },
                {
                    "id": 102,
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                }
        
              ]
        },
        {
            "id": 5,
            "name": "Introduction to MS-Office",
            "instructor": "Satya Nadella", 
            "description": "Learn the basics of React Native development and build your first mobile app.",
            "enrollmentStatus": "Open",
            "thumbnail": "your.image.here", 
            "duration": "8 weeks", 
            "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
            "location": "Online",
            "prerequisites": ["Basic JavaScript knowledge', 'Familiarity with React"],
            "syllabus": [
                {
                    "week": 1,
                    "topic": "Introduction to React Native",
                    "content":" Overview of React Native, setting up your development environment."
                },
                {
                    "week": 2,
                    "topic": "Building Your First App",
                    "content": "Creating a simple mobile app using React Native components."
                }
            ],
            "students": [
                {
                    "id": 101,
                    "name": "Alice Johnson",
                    "email": "alice@example.com"
                },
                {
                    "id": 102,
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                }
        
              ]
        },
        {
            "id": 6,
            "name": "Introduction to Native",
            "instructor": "Johnny", 
            "description": "Learn the basics of React Native development and build your first mobile app.",
            "enrollmentStatus": "Open",
            "thumbnail": "your.image.here", 
            "duration": "8 weeks", 
            "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
            "location": "Online",
            "prerequisites": ["Basic JavaScript knowledge', 'Familiarity with React"],
            "syllabus": [
                {
                    "week": 1,
                    "topic": "Introduction to React Native",
                    "content":" Overview of React Native, setting up your development environment."
                },
                {
                    "week": 2,
                    "topic": "Building Your First App",
                    "content": "Creating a simple mobile app using React Native components."
                }
            ],
            "students": [
                {
                    "id": 101,
                    "name": "Alice Johnson",
                    "email": "alice@example.com"
                },
                {
                    "id": 102,
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                }
        
              ]
        }
    ]
    constructor() {
        super();
        this.state = {
            courses: this.courses,
            loading: false              
        }
     }
  render() {
    return (
      <div className="container my-3">
            <h2>Available Courses</h2>
           
            <div className="row">
                {this.state.courses.map((element) =>{
                    return <div className="col-md-4"  key={element.id}>
                        <CoursesCard course_name={element.name} course_instructor={element.instructor} course_duration={element.duration} imageUrl="https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/09/23165047/Importance-of-Books.jpg"/>
                    </div>
                    })
                }
                
               
            </div>
           
      </div>
    )
  }
}

export default Courses
