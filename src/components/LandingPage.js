import React from 'react';
import Business from '../images/Business and Management.png';
import computerSience from '../images/Computer Science and Information Technology.png';
import Engineering from '../images/Engineering.png'
import biochemistry from '../images/biochemistry.png'
import Psychology from '../images/Psychology.png'
import Nursing from '../images/Nursing.png'

const LandingPage = () => {
  return (
    <div>

      <main>
        <div className='majors'>
          <div className='majors-cards'> 
            <img src={Business} alt="" />
            <a href="">Business and Management</a>
          </div>

          <div className='majors-cards'> 
            <img src={computerSience} alt="" />
            <a href="">Computer Science and Information Technology</a>
          </div>

          <div className='majors-cards'> 
            <img src={Engineering} alt="" />
            <a href="">Engineering</a>
          </div>

          <div className='majors-cards'> 
            <img src={biochemistry} alt="" />
            <a href="">Biological and Biomedical Sciences</a>
          </div>

          <div className='majors-cards'> 
            <img src={Psychology} alt="" />
            <a href="">Psychology</a>
          </div>

          <div className='majors-cards'> 
            <img src={Nursing} alt="" />
            <a href="">Nursing and Health Sciences</a>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage