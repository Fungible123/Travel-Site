import React from "react"
import Layout from "@common/Layout"
import Header from "@sections/Header"
import Gallery from "@sections/Gallery"
import Activities from "@sections/Activities"
import Rooms from "@sections/Rooms"
import Contact from "@sections/Contact"
import Footer from "@sections/Footer"

const IndexPage = () => (
  <Layout>
    <Header />
    <Gallery />
    <Activities />
    <Rooms />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
