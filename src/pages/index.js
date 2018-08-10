import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'
import Img from 'gatsby-image'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        {/*<Nav sticky={this.state.stickyNav} />*/}

        <div id="main">   
          <section id="intro" className="main">         
            <ul className="features">
                <li>
                  <Link to="/raki1"><Img sizes={this.props.data.image01.sizes}/></Link>
                  <h3>Raki</h3>
                </li>
                <li>
                  <Link to="/tooting"><Img sizes={this.props.data.image02.sizes}/></Link>
                  <h3>Tooting</h3>
                </li>
                <li>
                  <Link to="/stef"><Img sizes={this.props.data.image03.sizes}/></Link>
                  <h3>Stef</h3>
                </li>
                <li>
                  <Link to="/stef"><Img sizes={this.props.data.image04.sizes}/></Link>
                  <h3>Aly</h3>
                </li>
                <li>
                  <Link to="/stef"><Img sizes={this.props.data.image05.sizes}/></Link>
                  <h3>Jason and Pia</h3>
                </li>
                <li>
                  <Link to="/stef"><Img sizes={this.props.data.image06.sizes}/></Link>
                  <h3>Briton and Joy</h3>
                </li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    image01: imageSharp(id: { regex: "/raki00.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    image02: imageSharp(id: { regex: "/tooting00.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
    image03: imageSharp(id: { regex: "/stef00.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    image04: imageSharp(id: { regex: "/aly00.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
    image05: imageSharp(id: { regex: "/jasonpia00.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
    image06: imageSharp(id: { regex: "/britjoy00.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
  }
`
