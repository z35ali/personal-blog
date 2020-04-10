import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="zafar.a.ali2@gmail.com" />
      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
