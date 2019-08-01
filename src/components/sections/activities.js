import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Section } from "@components/global"
import Button from "@common/Button"

const Activities = () => {
  const activity = useStaticQuery(graphql`
    query {
      activity1: file(relativePath: { eq: "activity1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 579, maxHeight: 406, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      activity2: file(relativePath: { eq: "activity2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 579, maxHeight: 406, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      activity3: file(relativePath: { eq: "activity3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 579, maxHeight: 406, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Section id="activities">
      <Grid>
        <ActivityImage>
          <Img fluid={activity.activity1.childImageSharp.fluid} />
        </ActivityImage>
        <Content>
          <h2>LEARN HOW TO SURF</h2>
          <h3>
            Our instructors are world-class. Many of them have competed locally
            and globally and are very passionate about the sport.
          </h3>
          <Button />
        </Content>
      </Grid>
      <Grid inverse>
        <Content>
          <h2>SWIMMING POOLS</h2>
          <h3>
            We also have a large outdoor pool alongside a kiddie pool for your
            kids to enjoy.
          </h3>
          <Button />
        </Content>
        <ActivityImage>
          <Img fluid={activity.activity2.childImageSharp.fluid} />
        </ActivityImage>
      </Grid>
      <Grid>
        <ActivityImage>
          <Img fluid={activity.activity3.childImageSharp.fluid} />
        </ActivityImage>
        <Content>
          <h2>RECEPTIONS</h2>
          <h3>
            Our outdoor reception is also perfect for wedding receptions,
            parties, events, or meetings.
          </h3>
          <Button />
        </Content>
      </Grid>
    </Section>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 0;
  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 3fr 2fr;
  `}
  h2 {
    margin-bottom: 16px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;
    &:last-child {
      margin-bottom: 24px;
    }
    ${props =>
      props.inverse &&
      `
        ${Content} {
          order: 2;
        }
    `}
  }
`

const ActivityImage = styled.figure`
  margin: 0;
  width: 100%;
`

const Content = styled.div`
  margin: 30px;
  padding: 10px 40px;
`

export default Activities
