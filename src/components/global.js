import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1350px;
  }

  ${props =>
    props.fluid &&
    `max-width: 1200px !important;
    `}
`

export const Section = styled.section`
  padding: 128px 0;
  overflow: hidden;
  background-color: ${props => props.theme.color.colorful.flesh};
  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 96px 0;
  }
`
