import styles from './SignUp.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignUp=()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return(
        <div className={styles.container}>
            <div className={styles.leftSidebar}>
                <div className={styles.navbar}>
                    <img src=".././images/JUSTDigikull-Logo-7000x7000 1.svg" alt="error" />
                    <span>Digikull</span>
                </div>

                <div className={styles.rightSidebarContext}>
                      <label className={styles.Mock}>How do you want to use<br/>Mock Tool</label>  
                      <label className={styles.rTxt}>We will personalize your setup experience<br/>accordingly.</label>
                
                      <NavLink to='/freetrial' className={styles.horn}>
                        
                          <div>
                              <img src=".././images/hiring 1.svg" alt="error" />
                          </div>
                          <div className={styles.hornTxt}>
                              <label className={styles.label1}>Want to Hire Talent </label><br/>
                              <p className={styles.label2}>Evulate any skill by your Standards</p>
                          </div>
                    </NavLink>
                    <NavLink to='/freeaccount' className={styles.hand}>
                        <div>
                            <img src=".././images/hiring 1 (1).svg" alt="error" />
                        </div>
                        <div className={styles.handTxt}>
                            <label className={styles.label1}>Want to test Your Skills </label><br/>
                            <p className={styles.label2}>Solve and Learn More New Skills</p>
                        </div>
                    </NavLink>

                    <div className={styles.btnDiv}>
                        <button className={styles.btn}>Create Account</button>
                        <NavLink to="/">I  already have a Account.</NavLink>
                    </div>


                </div>


            </div>

            <div className={styles.rightSidebar}>
                <div className={styles.rightImage}>
                <Carousel data-bs-theme="dark"  indicators={false} controls={false} interval={1000} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className={styles.images}>
        <img
          className={styles.carousel}
          src='.././images/image 5.svg'
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.images}>
        <img
          className={styles.carousel}
          src='.././images/image 5.svg'
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.images}>
        <img
          className={styles.carousel}
          src='.././images/image 5.svg'
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>

<div className={styles.moveBar}>
  <div className={styles.oneHalf}></div>
  <div className={styles.secondHalf}></div>
</div>

<div className={styles.rightSidebarTxt}>
    <label className={styles.first}>Al Powered Tool</label>
    <br/>
    <small>We use AI to Evaluate and give</small>
    <br/>
    <label className={styles.second}>feedbacks</label>
</div>


<div className={styles.Dot}>
    <div className={index==0?styles.dot_sub1:styles.dot_sub2}></div>
    <div className={index==1?styles.dot_sub1:styles.dot_sub2}></div>
    <div className={index==2?styles.dot_sub1:styles.dot_sub2}></div>
</div>





            </div>
        </div>
    )
}
export default SignUp;