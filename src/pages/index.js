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
                  <Link to="/portraits"><Img sizes={this.props.data.imagePortraits.sizes}/></Link>
                  <h3>Portraits</h3>
                </li>
                <li>
                  <Link to="/weddings"><Img sizes={this.props.data.imageEvents.sizes}/></Link>
                  <h3>Events</h3>
                </li>
                <li>
                  <Link to="/events"><Img sizes={this.props.data.imageWeddings.sizes}/></Link>
                  <h3>Weddings</h3>
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
    imagePortraits: imageSharp(id: { regex: "/PortraitsCover.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    imageEvents: imageSharp(id: { regex: "/EventsCover.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
    imageWeddings: imageSharp(id: { regex: "/WeddingsCover.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
  }
`
