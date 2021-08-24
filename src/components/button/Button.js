import React from "react";
const button = {
  backgroundColor: "#f98501",
  display: "flex",
flexDirection:" row",
justifyContent: "center",
alignItems: "center",
 padding: "5px ",
marginRight:"50px",
marginLeft:"49px",
borderRadius:"12px"
// width: "228px",
// height: "50px",
// left: "956px",
// top: "463px",
};
const para = {
  position: "static",
 
  height: "20px",
  color:"white",
  padding:"7px",
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontWeight: " 600",
  fontSize: "12px",
  lineHeight: "20px",
  /* identical to box height */

  textTransform: "uppercase",
  
};
function Button() {
  return (
    <div style={button}>
      <p style={para}>Request care box</p>
    </div>
  );
}

export default Button;
