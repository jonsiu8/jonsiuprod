import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'
import Img from 'gatsby-image'


class Aly extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <h1>Aly</h1>
        <div id="main">

          <section id="intro" className="main">         
              <ul className="features">
                  <li>
                    <Img sizes={this.props.data.image01.sizes}/>
                  </li>
                  <li>
                    <Img sizes={this.props.data.image02.sizes}/>
                  </li>
                  <li>
                    <Img sizes={this.props.data.image03.sizes}/>
                  </li>
                  <li>
                    <Img sizes={this.props.data.image04.sizes}/>
                  </li>
                  <li>
                    <Img sizes={this.props.data.image05.sizes}/>
                  </li>
                  <li>
                    <Img sizes={this.props.data.image06.sizes}/>
                  </li>
              </ul>
          </section>
         
        </div>

      </div>
    )
  }
}

export default Aly

export const pageQuery = graphql`
  query AlyQuery {
    site {
      siteMetadata {
        title
      }
    }
    image01: imageSharp(id: { regex: "/aly01.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    image02: imageSharp(id: { regex: "/aly02.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
    image03: imageSharp(id: { regex: "/aly03.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    image04: imageSharp(id: { regex: "/aly04.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
    image05: imageSharp(id: { regex: "/aly05.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
    image06: imageSharp(id: { regex: "/aly06.jpg/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    } 
  }
`
