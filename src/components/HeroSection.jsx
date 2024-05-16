import React from 'react'


function HeroSection() {
  return (
    <>
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className='mt-5'>
                            <h3>HI I'AM</h3>
                            <h2>A R NIRMAL</h2>
                            <h5 className='mt-3'>I' AM A : REACT DEVELOPER</h5>
                            <h6 className='mt-3 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum recusandae suscipit quidem deleniti doloribus, eum voluptatem fugiat qui tempore nemo maxime impedit aliquam vel. Eaque quam placeat excepturi amet odit!</h6>
                        </div>
                        <button className='btn btn-primary'><a style={{textDecoration:'none', color:'black'}} href='Nirmal-CV.pdf' className='download-btn' download={'Nirmal-CV.pdf'}>Download CV</a></button>
                    </div>
                    <div className="col-lg-7">
                        <img className='img img-fluid' src="https://camo.githubusercontent.com/7de37139d0b4c1ce40865e799b446c0e963a3dd8fb68d239707237c40604fa3d/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection