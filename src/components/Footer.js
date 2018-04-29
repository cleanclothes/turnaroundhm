import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/logo1.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            
            <ul className="icons">
                <li><a href="https://twitter.com/cleanclothes" title="Twitter" className="icon fa-twitter fa-2x alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://facebook.com/cleanclothescampaign" title="Facebook" className="icon fa-facebook fa-2x alt"><span className="label">Facebook</span></a></li>
                <li><a href="mailto:join@turnaroundhm.org" title="Email" className="icon fa-envelope fa-2x alt"><span className="label">Email</span></a></li>
                <li><a href="https://cleanclothes.org" title="Website Clean Clothes Campaign" className="icon fa-globe fa-2x alt"><span className="label">Website Clean Clothes Campaign</span></a></li>
                <li><a href="#" title="Newsletter signup" className="icon fa-bullhorn fa-2x alt"><span className="label">Newsletter signup</span></a></li>
                <li><img classname="" src={logo} alt="logo Turn Around H&M"/></li>
            </ul>
            
        </section>
        <p className="copyright">&copy; Clean Clothes Campaign. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
