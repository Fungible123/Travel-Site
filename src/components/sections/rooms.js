import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "@common/Lightbox"

const Rooms = () => (
  <StaticQuery
    query={graphql`
      query {
        roomImages: allFile(filter: { relativeDirectory: { eq: "room" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 900, maxHeight: 650, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox roomImages={data.roomImages.edges} />}
  />
)

export default Rooms
