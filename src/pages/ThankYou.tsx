import Sidebar from "../components/Sidebar/Sidebar";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import React from 'react';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Summary = () => {
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      localStorage.clear(); // Clear local storage
      navigate("/");
    }, 10000);
    }, [navigate]);

    return (
        <AppLayout>
            <Sidebar currentStep={5} />
            <MainWrapper>
                <div id="form" className="form-class">
                    <div className="finalmessage-container">
                        <div className="thanks-icon">
                           <img className="thank-you-icon" src="assets/images/icon-thank-you.svg" alt="thank you icon"/>
                        </div>
                        <div className="thank-you-heading">

                            <h1>Thank you!</h1>
                        </div>
                        <div className="thank-you-p">
                            <p>Thanks for confirming your subscription! We hope you have fun using our platform! If you ever need support, feel free to email us at support@loremgaming.com</p>
                        </div>
                    </div>
                    {showConfetti && (
                        <div className="confetti-container">
                            <Confetti
                                width={width}
                                height={height}
                                recycle={false} // Disable recycling of confetti particles
                                run={showConfetti} // Start the confetti animation
                                numberOfPieces={600} // Number of confetti pieces
                                gravity={0.3} // Gravity factor (affects falling speed)
                                wind={0.1} // Wind factor (affects horizontal movement)
                                initialVelocityX={10} // Initial horizontal velocity
                                initialVelocityY={15} // Initial vertical velocity
                                fadeOut={true} // Enable fading out of confetti
                                opacity={1} // Initial opacity of confetti pieces
                                recycleDelay={3000} // Time delay before recycling confetti pieces
                                />
                        </div>
                    )}
                </div>    
            </MainWrapper>
        </AppLayout>
    );
}
export default Summary;