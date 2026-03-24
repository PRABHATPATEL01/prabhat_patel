import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PRABHAT
              <br />
              <span>PATEL</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>An iOS</h3>
            <h2 style={{ marginTop: '5px' }}>Application</h2>
            <h2 style={{ color: '#c481ff', marginTop: '5px' }}>Developer</h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
