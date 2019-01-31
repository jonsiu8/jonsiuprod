import React from 'react'
import Link from 'gatsby-link'
import logo1 from '../assets/images/logo1.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo1} alt="" /></span>
        {/*<h1>Jon Siu Productions</h1>*/}
    </header>
)

export default Header
