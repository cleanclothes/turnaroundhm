import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro','turnhmaround', 'news', 'livingwage', 'faq'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Intro</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="turnhmaround">
                    <a href="#">Turn H&amp;M Around</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="news">
                    <a href="#">News</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="livingwage">
                    <a href="#">Destination: Living Wage</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="faq">
                    <a href="#">FAQ</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
