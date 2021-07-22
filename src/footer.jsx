
import { FaPhoneAlt, FaAddressBook, FaEnvelope, } from 'react-icons/fa';
import Logo from './logo.jsx'


const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="under_footer">
                    <div className="left_footer">
                        <h3><FaAddressBook /> Address</h3>
                        <h3>Dara Shikoh</h3>
                        <h6>At-Hussain chowk ward no-22<br />
                            Maricha Road near kabirstan<br />
                            po-Supaul Dist-Supaul State-Bihar<br />
                            pin-852131</h6>
                        <h4><FaPhoneAlt /> 9174589122</h4>
                        <h4><FaEnvelope /> darashikoh94@gmail.com</h4>
                    </div>
                    <div className="right_footer">
                        <Logo />
                        <p>copyright@dara shikoh</p>
                        
                    </div>
                </div>
            </div>

        </>
    )

}
export default Footer;