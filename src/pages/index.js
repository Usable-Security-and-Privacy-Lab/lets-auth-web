import * as React from "react"
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import logo from "../images/logo-bright-red.png"

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    text-size-adjust: 100%;
    font-family: 'Archivo', serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #1a202c;
  }
`

const University = styled.div`
  padding: 10px 40px;
  background-color: black;
  color: white;
`

const Lab = styled.div`
  padding: 10px 40px 0px;
  >img {
    max-height: 40px;
  }
`

const Banner = styled.div`
  background-color: #219ebc;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  text-align: center;
  color: white;
  weight: 900;
  font-family: 'Proza Libre';
`

const Content = styled.div`
  margin: 0px auto;
  padding-top: 50px;
  max-width: 1024px;
`

const Header = styled.div`
  font-size: 2em;
`

// markup
const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <title>Let's Authenticate</title>
      <University>Brigham Young University</University>
      <Lab><img src={logo} /></Lab>
      <Banner>Let's Authenticate</Banner>
      <Content>
        <h1>Presented at NDSS 2022</h1>
        
        <h2><a href="https://www.ndss-symposium.org/ndss-paper/auto-draft-251/">Let’s Authenticate: Automated Certificates for User Authentication</a></h2>

        <p>James Conners, Corey Devenport, Stephen Derbidge, Natalie Farnsworth, Kyler Gates, Stephen Lambert, Christopher McClain, Parker Nichols, Daniel Zappala &mdash; Brigham Young University</p>

        <p>Passwords have numerous drawbacks, and as a result many systems have been designed to replace them. Password replacements have generally failed to dislodge passwords due to the complexity of balancing usability, deployability, and security. However, despite this lack of success, recent advances with password managers and FIDO2 afford new opportunities to explore system design for password replacements. In this work, we explore the feasibility of a system for user authentication based on certificates. Rather than developing new cryptography, we develop a new *system*, called Let's Authenticate, which combines elements of password managers, FIDO2, and certificates. Our design incorporates feedback from a survey of 397 participants to understand their preferences for system features. Let’s Authenticate issues privacy-preserving certificates to users, automatically manages their credentials, and eliminates trust in third parties. We provide a detailed security and privacy analysis, an overhead analysis, and a systematic comparison of the system to a variety of alternatives using a well-known framework. We discuss how Let’s Authenticate compares to other systems, lessons learned from our design, and issues related to centralized management of authentication data.</p>

        <h2>Software</h2>


      </Content>
      
    </main>
  )
}

export default IndexPage
