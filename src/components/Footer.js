import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/logo1.svg';
import ccclogo from '../assets/images/ccc-logo-small.svg'

const Footer = (props) => (
    <footer id="footer">
        <section>

            <ul className="icons">
                <li><a href="https://twitter.com/cleanclothes" title="Twitter" className="icon fa-twitter fa-2x alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://facebook.com/cleanclothescampaign" title="Facebook" className="icon fa-facebook fa-2x alt"><span className="label">Facebook</span></a></li>
                <li><a href="mailto:join@turnaroundhm.org" title="Email" className="icon fa-envelope fa-2x alt"><span className="label">Email</span></a></li>
                <li><a href="http://eepurl.com/dsx8tP" title="Newsletter signup" className="icon fa-bullhorn fa-2x alt"><span className="label">Newsletter signup</span></a></li>
                <li><a href="https://turnaroundhm.org"><img className="" src={logo} alt="logo Turn Around H&M" /></a></li>
                <li><a href="https://cleanclothes.org" title="Clean Clothes Campaign" target="_blank"><img className="" src={ccclogo} alt="logo Clean Clothes Campaign" /></a></li>
            </ul>

        </section>
        <p className="copyright">&copy; Clean Clothes Campaign.<br/> Photo: Yevgenia Belorusets. Template: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
