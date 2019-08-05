import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        footer: file(relativePath: { eq: "footer.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1400, maxHeight: 369) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        facebook: file(relativePath: { eq: "facebook.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 30, maxHeight: 30) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        twitter: file(relativePath: { eq: "twitter.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 30, maxHeight: 30) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        instagram: file(relativePath: { eq: "instagram.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 30, maxHeight: 30) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.footer.childImageSharp.fluid
      const facebook = data.facebook.childImageSharp.fluid
      const twitter = data.twitter.childImageSharp.fluid
      const instagram = data.instagram.childImageSharp.fluid
      return (
        <Background Tag="section" fluid={imageData}>
          <CardContainer>
            <FooterCard>
              <h3>CONTACT</h3>
              <hr />
              <p>(02) 333 9999</p>
              <p>(62) 903 333 9999</p>
              <p>akawakaw@io.com</p>
            </FooterCard>
            <FooterCard>
              <h3>LOCATION</h3>
              <hr />
              <p>8 San Juan Bay</p>
              <p>Galaga Islands</p>
              <p>Tiki Tiki</p>
            </FooterCard>
            <FooterCard>
              <h3>FOLLOW US</h3>
              <hr />
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Social fluid={facebook} />
              </a>
              <a
                href="http://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Social fluid={twitter} />
              </a>
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Social fluid={instagram} />
              </a>
            </FooterCard>
          </CardContainer>
        </Background>
      )
    }}
  />
)

const Background = styled(BackgroundImage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const CardContainer = styled.div`
  margin: 0 auto;
  max-width: 825px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  justify-items: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    margin: 0px 10px;
  }
`

const FooterCard = styled.div`
  width: 100%;
  background: rgba(196, 196, 196, 0.6);
  border-radius: 5px;
  padding: 40px 5px;
  text-align: center;
  margin: 20px 0;

  hr {
    width: 60%;
    border: 1px solid #1e1e1e;
  }

  h3 {
    color: ${props => props.theme.color.dark.primary};
  }
`

const Social = styled(Img)`
  width: 30px;
  height: 30px;
  margin: 15px auto;
`

export default Footer
