import styles from './CreateUser.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CreateUser=()=>{
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
                    <label className={styles.label1}>Create Your Account </label><br/>
                    <label className={styles.label2}>And start testing your Skills for company <br /> standards</label>    
                
                <div className={styles.form}>
                    
                   <div>
                    <label>Full Name</label>
                        <div className={styles.formInput}>
                            <img src="../../images/mingcute_user-4-fill.svg" alt="error" placeholder='Write Your Name'/>
                            <input type="text" placeholder='Write Your Name' />
                        </div>
                   </div>

                    <div>
                        <label>Email</label>
                        <div className={styles.formInput}>
                            <img src="../../images/clarity_email-solid.svg" alt="error" placeholder='Write Your Name'/>
                            <input type="text" placeholder='Yourname or Email' />
                        </div>
                    </div>
                    
                    <div>
                        <label>Password</label>
                        <div className={styles.passwordInp}>
                            <div className={styles.password}>
                                <img src="../../images/mdi_password.svg" alt="error" placeholder='Write Your Name'/>
                                <input type="text" placeholder='Password' />
                            </div>
                            <div className={styles.eye}>
                                <img src="../../images/ion_eye.svg" alt="error" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.phoneSection}>
                        <label>Phone Number</label><br/>
                        <select className={styles.selectPhone}>
                            <option  value="">+91</option>
                            <option value="">+92</option>
                        </select>                        
                            <input type="text" placeholder='Phone Number' />
                    </div>
                </div>





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
export default CreateUser;