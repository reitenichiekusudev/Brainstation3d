import React, { Component } from 'react'
import '../styles/footer.scss';
import icon1 from '../images/kisspng-brand-symbol-facebook-logo-5-aceb-8-dd-7-e-3482-461605981523497181517.png';
import icon2 from '../images/kisspng-product-design-number-pattern-home-belabela-5-b-6-c-4-ab-1-b-2-c-015-2642726415338236657322.png';
import icon3 from '../images/kisspng-south-sydney-rabbitohs-manly-warringah-sea-eagles-5-afd-4-a-36279-ce-9-3665287815265490461623@3x.png';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__wrapper">
                    <h3>Careers</h3>
                    <h3>Disclaimer</h3>
                    <h3>Terms and Conditions</h3>
                    <h3>Contact</h3>
                    <img src={icon1} />
                    <img src={icon2} />
                    <img src={icon3} />
                </div>
            </div>
        )
    }
}

export default Footer
