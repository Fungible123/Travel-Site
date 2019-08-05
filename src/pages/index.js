import React from "react"
import Layout from "@common/Layout"
import Navbar from "@common/Navbar"
import Header from "@sections/header"
import Gallery from "@sections/gallery"
import Activities from "@sections/activities"
import Rooms from "@sections/rooms"
import Contact from "@sections/contact"
import Footer from "@sections/footer"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Gallery />
    <Activities />
    <Rooms />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
