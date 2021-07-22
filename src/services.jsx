
import { FaPhoneAlt } from 'react-icons/fa';

const Services = (props) => {

    return (
        <>

            <div className='service'>
            
                <div className='under_service'>
                    <div className="main_service">
                        <img src={props.image} />
                        <h2>{props.heading}</h2>
                        <p>{props.para}</p>
                        <button> <FaPhoneAlt /> Contact</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Services;