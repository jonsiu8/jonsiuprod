import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
//import UserLinks from '../UserLinks'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${props => props.theme.brand};

  .nav-link {
    font-size: 1.2rem;
    margin-right: 10px;
    margin-left: 10px;
    font-weight: 100;
    color: #989898;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      margin-bottom: 10px;
    }

    span {
      display: none;
    }
  }
`

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <section>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/services">
            Services
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </section>       
      </NavContainer>
    )
  }
}

export default Navigation
