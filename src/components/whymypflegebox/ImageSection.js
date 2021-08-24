import React from 'react'
import Image1 from "../../Pictures/rosebox-BFdSCxmqvYc-unsplash.jpg";
import Image2 from "../../Pictures/mealpro-dd1M0Ji9xHQ-unsplash.jpg"

export default function ImageSection() {
    return (
        <div className="container ImageSection">
           <div className="row"> 
            <div className="col-lg-6">
                <img src={Image1} />
            </div>
            <div className="col-lg-6">
            <img src={Image2} />
                
            </div>
            </div> 
        </div>
    )
}
