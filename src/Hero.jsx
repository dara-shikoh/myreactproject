
import { FaPhoneAlt } from 'react-icons/fa';


const Hero = () => {
    return (
        <>
            <div className="main_hero">
                <div className='hero'>
                    <div className='under_hero'>
                        <div className='left_hero'>
                            <h1>I am Dara Shikoh</h1>
                            <p>I am professional front-end developer<br />
                                I have designed so many website </p>
                            <button> <FaPhoneAlt /> Contact</button>
                        

                        </div>
                    </div>
                    <div className='right_hero'>
                     <img src='./images/ranvir.png' alt='ranvir' />

                    </div>
                </div>
            </div>
        </>
    )

}
export default Hero;