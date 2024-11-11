import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit voluptatibus culpa reprehenderit distinctio,
            facere quis vitae unde vero a nam, eos error modi doloremque dolores nemo? Ipsum hic odit est impedit tempore ipsa blanditiis dolorum!</p>
            <div className="icons">
                <FontAwesomeIcon icon={faFacebook} className="fa" />
                <FontAwesomeIcon icon={faTwitter} className="fa" />
                <FontAwesomeIcon icon={faInstagram} className="fa" />
                <FontAwesomeIcon icon={faLinkedin} className="fa" />
            </div>
            <p>Designed by Daniel Richard Damilola</p>
        </section>
    )
}

export default Footer