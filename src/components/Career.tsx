import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer L2 (iOS)</h4>
                <h5>LYTBLB Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Solely managed the modular transformation of core codebases to deploy 20+ unique applications. Engineered environment-based configs reducing deployment errors by 100%, and optimized app footprint using On-Demand Resources (ODR).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology in IT</h4>
                <h5>Dr. A.P.J. Abdul Kalam Tech. University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Graduated with a CGPA of 8.2/10.0 in Information Technology, focusing on software architecture and development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
