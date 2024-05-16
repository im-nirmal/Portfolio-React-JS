import React from 'react'

function Projects() {

    //project data
    const projects = [
        {
            id:1,
            title:"Counter App",
            description:"counter app using redux",
            imageURL:"https://res.cloudinary.com/practicaldev/image/fetch/s--o8roiQGC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.ibb.co/0BcFhHN/project-1.png",
            gitURL:"https://github.com/im-nirmal/Counter-app.git",
            projectURL:"https://counter-app-eight-chi.vercel.app/"
        },
        {
            id:2,
            title:"Quiz App",
            description:"Quiz App using reactjs",
            imageURL:"https://miro.medium.com/v2/resize:fit:1000/1*FBRsnCP9wE84UVW1Kkv5Yw.jpeg",
            gitURL:"https://github.com/im-nirmal/Quiz-App.git",
            projectURL:"https://quiz-app-one-khaki.vercel.app/"
        },
        {
            id:2,
            title:"Quiz App",
            description:"Quiz App using reactjs",
            imageURL:"https://miro.medium.com/v2/resize:fit:1000/1*FBRsnCP9wE84UVW1Kkv5Yw.jpeg",
            gitURL:"https://github.com/im-nirmal/Quiz-App.git",
            projectURL:"https://quiz-app-one-khaki.vercel.app/"
        },
        {
            id:2,
            title:"Quiz App",
            description:"Quiz App using reactjs",
            imageURL:"https://miro.medium.com/v2/resize:fit:1000/1*FBRsnCP9wE84UVW1Kkv5Yw.jpeg",
            gitURL:"https://github.com/im-nirmal/Quiz-App.git",
            projectURL:"https://quiz-app-one-khaki.vercel.app/"
        }
    ]

  return (
    <div id='projects' className='container my-5'>
        <h1 className='text-center mb-4'>Projects</h1>
        <div><hr /></div>
        <div>
            <div className="row">
                { projects.map((project)=>(
                    <div key={project.id} className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <img className='card-img-top project-image' src={project.imageURL} alt={project.title} />
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <div className="d-flex justify-content-between">
                                <a href={project.gitURL} className='btn btn-outline-secondary'>GitHub</a>
                                <a href={project.projectURL} className='btn btn-outline-primary'>View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
                ))

                }
                
            </div>
        </div>
    </div>
  )
}

export default Projects