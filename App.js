import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
return (
 <h1 className="body">Divyanshu Srivastava</h1>
)
};

const HeadingComponent = () => {
  return(
    <div>
    <Title />
    <Title></Title>
   <h1>This is functional component</h1>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
