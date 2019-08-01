import React from "react"
import Slider from "react-slick"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Img from "gatsby-image"

const Container = styled.div`
  padding: 150px 40px;
  background: ${props => props.theme.color.colorful.flesh};
`

const ImageContainer = styled.div`
  margin: 10px;
  padding: 10px;
`

function Gallery() {
  const images = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "gallery1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 347, maxHeight: 274, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "gallery2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 347, maxHeight: 274, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "gallery3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 347, maxHeight: 274, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "gallery4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 347, maxHeight: 274, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image5: file(relativePath: { eq: "gallery5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 347, maxHeight: 274, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image6: file(relativePath: { eq: "gallery6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 347, maxHeight: 274, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }
  return (
    <Container id="gallery">
      <Slider {...settings}>
        <ImageContainer>
          <Img fluid={images.image1.childImageSharp.fluid} />
        </ImageContainer>
        <ImageContainer>
          <Img fluid={images.image2.childImageSharp.fluid} />
        </ImageContainer>
        <ImageContainer>
          <Img fluid={images.image3.childImageSharp.fluid} />
        </ImageContainer>
        <ImageContainer>
          <Img fluid={images.image4.childImageSharp.fluid} />
        </ImageContainer>
        <ImageContainer>
          <Img fluid={images.image5.childImageSharp.fluid} />
        </ImageContainer>
        <ImageContainer>
          <Img fluid={images.image6.childImageSharp.fluid} />
        </ImageContainer>
      </Slider>
    </Container>
  )
}

export default Gallery
