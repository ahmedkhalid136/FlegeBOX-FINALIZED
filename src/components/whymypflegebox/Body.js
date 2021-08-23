import React from 'react'

export default function Body() {
    return (
        <div>
            <div className="bodySection">
                <h1>Why MyPflegebox ?</h1>
               <div style={{marginTop:"70px"}}> <p>Batteries are nothing more than devices that store chemical energy and convert it into electrical energy. They have four <br />
                main parts: the cathode, anode, electrolyte, and separator.
                <br /><br />
                The cathode and anode are electrodes. Our electrical current is produced when electrons are passed from one<br />
                electrode to the other. In this case, electrons are passed from the negatively charged anode to the positively charged.<br />
                cathode. The role of the two electrodes, then, is to produce our electric current</p>  
                </div>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h3>Reliable Delivery</h3>
                    <p>Free shipping every month and <br /> an time at your home or at <br /> your care service.</p>
                </div>
                <div className="col-lg-3">
                <h3>No Formalities</h3>
                    <p>We take care of the application <br /> and billing with the nursing <br /> care insurrance.</p>
                </div>
                <div className="col-lg-3">
                <h3>Quality</h3>
                    <p>We supply you with high <br /> quality branded products.</p>
                </div>
                <div className="col-lg-3">
                <h3>Prescription Free</h3>
                    <p>You do not need a prescription from <br /> your doctor.</p>
                </div>
            </div>
            </div>
            <div className="buttonDiv">
                <button>REQUEST CARE BOX</button>
            </div>
        </div>
    )
}
