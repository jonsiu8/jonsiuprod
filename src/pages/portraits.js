import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'
import Img from 'gatsby-image'


class Portraits extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <h1>PORTRAITS</h1>
        <div id="main">

          <section id="intro" className="main">         
              <ul className="features">
                  <li>
                    <Img sizes={this.props.data.imagePortrait01.sizes}/>
                  </li>
                  <li>
                    <Img sizes={this.props.data.imagePortrait02.sizes}/>
                  </li>
                  <li>
                    <Img sizes={this.props.data.imagePortrait03.sizes}/>
                  </li>
                  <li>
                    <Img sizes={this.props.data.imagePortrait04.sizes}/>
                  </li>
                  <li>
                    <Img sizes={this.props.data.imagePortrait05.sizes}/>
                  </li>
                  <li>
                    <Img sizes={this.props.data.imagePortrait06.sizes}/>
                  </li>
              </ul>
          </section>
         
        </div>

      </div>
    )
  }
}

export default Portraits

export const pageQuery = graphql`
  query PortraitsQuery {
    site {
      siteMetadata {
        title
      }
    }
    imagePortrait01: imageSharp(id: { regex: "/portrait01.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    imagePortrait02: imageSharp(id: { regex: "/portrait02.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
    imagePortrait03: imageSharp(id: { regex: "/portrait03.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    imagePortrait04: imageSharp(id: { regex: "/portrait04.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
    imagePortrait05: imageSharp(id: { regex: "/portrait05.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
    imagePortrait06: imageSharp(id: { regex: "/portrait06.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
  }
`
