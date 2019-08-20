import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Button from "@common/Button"

const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1400, maxHeight: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.background.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" fluid={imageData}>
          <ImageContainer>
            <Card>
              <Intro>
                Planning your next vacation? Akaw Beach Resort has the best room
                accomodations for you!
              </Intro>
              <Button />
            </Card>
          </ImageContainer>
        </BackgroundImage>
      )
    }}
  />
)

const Header = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const ImageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
`

const Card = styled.div`
  text-align: center;
  width: 40%;
  height: 45%;
  padding: 40px 30px;
  background: rgba(250, 103, 20, 0.8);
  border-radius: 5px;
  position: relative;
  left: 615px;
  top: 250px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    width: 40%;
    height: 50%;
    position: relative;
    left: 415px;
    top: 250px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 40%;
    height: 50%;
    position: relative;
    left: 30%;
    top: 40%;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 70%;
    height: 40%;
    position: relative;
    left: 15%;
    top: 35%;
    padding: 10px;
  }
`

const Intro = styled.h2`
  text-align: center;
  color: ${props => props.theme.color.light};
  @media (max-width: ${props => props.theme.screen.md}) {
    ${props => props.theme.font_size.regular}
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    ${props => props.theme.font_size.regular}
  }
`

export default Header
