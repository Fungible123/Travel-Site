import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

const RoomContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.color.colorful.flesh};
`

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 700px;
  margin: 0 auto;
`
const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`

const SingleImage = styled(Img)`
  border: 3px solid #ffffff;
  box-sizing: border-box;
`

const Heading = styled.div`
  max-width: 700px;
  border-bottom: 1px solid #ffffff;
  padding: 50px 0px 10px 0px;
  margin: 0 auto 60px auto;
  text-align: center;
`

const Remark = styled.p`
  max-width: 700px;
  color: ${props => props.theme.color.dark.secondary};
  margin: 20px auto 60px auto;
`

class Lightbox extends Component {
  static propTypes = {
    roomImages: PropTypes.array.isRequired, // eslint-disable-line
  }
  constructor(props) {
    super(props)
    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }
  render() {
    const { roomImages } = this.props
    const { selectedImage, showLightbox } = this.state

    return (
      <RoomContainer id="rooms">
        <Heading>
          <h2>Take a look at which room fits your needs.</h2>
        </Heading>

        <LightboxContainer>
          {roomImages.map(image => (
            <PreviewButton
              key={image.node.childImageSharp.fluid.src}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <SingleImage fluid={image.node.childImageSharp.fluid} />
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
          <Dialog>
            <Img fluid={selectedImage.node.childImageSharp.fluid} />
            <button
              type="button"
              onClick={() => this.setState({ showLightbox: false })}
            >
              Close
            </button>
          </Dialog>
        )}
        <Remark>
          * All prices are subject to change without prior notice. Please book
          your rooms in advanced to avoid inconveniences. You may contact our
          hotline number if you wish to cancel your bookings (notice of 3
          business days). Any bookings cancelled within the date of reservation
          shall not be refunded.
        </Remark>
      </RoomContainer>
    )
  }
}

export default Lightbox
