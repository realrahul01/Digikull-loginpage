import styles from './FreeTrialPage.module.css'
import {NavLink } from 'react-router-dom';

const FreeTrialPage=()=>{

    

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
                        <NavLink to='/freetrailcreate'> 
                            <button className={styles.btn1}>Create Account</button>
                        </NavLink>
                        <NavLink className={styles.belowBtn} to="/">I  already have a Account.</NavLink>
                    </div>


                </div>

                

            </div>

            <div className={styles.rightSidebar}>
                <div className={styles.freeTrial}>
                    <div className={styles.trial}>Free trial</div>
                    <div className={styles.trailHr}>
                        <hr />
                    </div>
                    <div>
                        <img src="../../images/mdi_tick-circle.svg" alt="error" />
                        <label>Unlimitied Mock Interviews</label>
                    </div>
                    <div>
                        <img src="../../images/mdi_tick-circle.svg" alt="error" />
                        <label>Unlimitied Assignemnt Attempts</label>
                    </div>
                    <div>
                        <img src="../../images/mdi_tick-circle.svg" alt="error" />
                        <label>Premade Question Banks</label>
                    </div>
                    <div>
                        <img src="../../images/mdi_tick-circle.svg" alt="error" />
                        <label>30+ skills to Test</label>
                    </div>
                    <div>
                        <img src="../../images/mdi_tick-circle.svg" alt="error" />
                        <label>Group Creating Feature</label>
                    </div>
                    <div>
                        <img src="../../images/mdi_tick-circle.svg" alt="error" />
                        <label>AI evaluation</label>
                    </div>
                    <div>
                        <img src="../../images/mdi_tick-circle.svg" alt="error" />
                        <label>Transcribe Every Word</label>
                    </div>
                    <div>
                        <img src="../../images/mdi_tick-circle.svg" alt="error" />
                        <label>Anti-Cheat Mechanism</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FreeTrialPage;