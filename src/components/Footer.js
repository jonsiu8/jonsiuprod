import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Jon Siu</h2>
            <p>Portrait and Event Photographer</p>
            <ul className="actions">
                <li><Link to="/" className="button">Home</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>Cebu &bull; Philippines</dd>
                <dt>Phone</dt>
                <dd>(+63) 927 5225 108</dd>
                <dt>Email</dt>
                <dd><a href="#">jonsiuprod@gmail.com</a></dd>
            </dl>
            <ul className="icons">                
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>                
            </ul>
        </section>
        <p className="copyright">&copy; Jon Siu Productions</p>
    </footer>
)

export default Footer
