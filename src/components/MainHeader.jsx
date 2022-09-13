import { Link } from "react-router-dom";

import HeaderImage from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100daysofworkout</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            excepturi non obcaecati sunt quos assumenda eaque quaerat dolores,
            est quo!
          </p>
          <Link to='/plans' className='btn lg'>
            Get Started
          </Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className='main__header-img'>
            <img src={HeaderImage} alt='Main Header' srcset='' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
