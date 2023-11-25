import styles from './LoginPage.module.css'
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react'
import { Link } from 'react-router-dom';


const LoginPage=()=>{

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

                <div className={styles.carouselIndicators}>
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

          <div>
                <div className={styles.tool}>
                    <label className={styles.first}>Al Powered Tool</label>
                    <br/>
                    <small>We use AI to Evaluate and give</small>
                    <br/>
                    <label className={styles.second}>feedbacks</label>
                </div>
          </div>
          
          <div className={styles.Dot}>
          
                    <div className={index==0?styles.dot_sub1:styles.dot_sub2}></div>
                    <div className={index==1?styles.dot_sub1:styles.dot_sub2}></div>
                    <div className={index==2?styles.dot_sub1:styles.dot_sub2}></div>
          </div>

 </div>



            <div className={styles.rightSidebar}>
                    <div>
                        <h4 className={styles.h3}>Welcome Back!!</h4>
                        <label className={styles.p1}>We are happy to see you again !!!</label>
                        <main className={styles.p2}>We Are happy to Test your Skills For you</main>
                    </div>
    
                    <div className={styles.inputField}>
                        <label htmlFor="inp1">Email</label>
                        <div className={styles.inp1}>
                            <img src=".././images/clarity_email-solid.svg" alt="error" />
                            <input type="text" placeholder='Username or Email'/>
                        </div>
                    </div>

                    <div className={styles.inp}>
                        <label htmlFor="inp2">Password</label>
                            <div className={styles.inp2}>
                                <div className={styles.password}>
                                    <img src=".././images/mdi_password.svg" alt="error" />
                                    <input type="password" placeholder='Password'/>
                                </div>
                            <div className={styles.eye}>
                                <img src=".././images/ion_eye.svg" alt="error" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.security}>
                        
                        <div className={styles.checkbox}>
                            <input type='checkbox' id='myCheckbox'/>
                            <label htmlFor="myCheckbox" >Remember me</label>
                        </div>

                        <div>
                            <span>Forgot Password?</span>
                        </div>
                    </div>

                    <button className={styles.loginBtn}>Login</button>
                    <br/>
                    <label className={styles.ask}>Dont have a account? <Link to="/signup">Sign Up</Link> </label>

            </div>
        </div>
    )
}
export default LoginPage;