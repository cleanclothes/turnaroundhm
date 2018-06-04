import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><a href="https://turnaroundhm.org"><img src={logo} alt="" /></a></span>
    </header>
)

export default Header
