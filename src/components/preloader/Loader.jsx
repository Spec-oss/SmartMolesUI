import React from "react";
import './loader.scss';
import {gsap} from "gsap";

// Preloader Component
const Preloader = () => (
    <div className="preloader">
        <div >
            <img className="ball" src="https://www.smartmoles.com/uploads/files/logo/450x450/smart-capillarity-sistem.png" alt="test" />
        </div>
    </div>
);

//APP Component
const Loader = () => {
    const [animationComplete, setAnimationComplete] = React.useState(false);

    const completeAnimation = () => {
        setAnimationComplete(true);
    };

    React.useEffect(() => {
        // GSAP animation
        let tl = gsap.timeline();
        const homeAnimation = (animation) => {
            tl.to(".ball", {
                duration: 2,
                y: "100vh",
                x:-160,
                ease: "bounce.out"
            })
                .to(".ball", {
                    duration: 120,
                    scale: 3,
                    x:-120,
                    ease: "power3.out",
                    onComplete: animation
                })
                .from(".after-animation", {
                    duration: 0.6,
                    y: 40,
                    opacity: 0,
                    ease: "power3.out"
                }, '-=0.8');
        };
        homeAnimation(completeAnimation);
    }, []);
    return (
        <>
            {animationComplete === false && <Preloader />}
            <main className="after-animation">
                <p className="title" style={{color:'black'}} >SmartMole's</p>
            </main>
        </>
    );
};
export default Loader;