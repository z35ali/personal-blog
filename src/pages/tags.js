import React, { Component } from 'react'
import '../css/allTags.css'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

import { StaticQuery, graphql } from 'gatsby'

export default class AllTags extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query MyQuery {
            allContentfulTag {
              edges {
                node {
                  title
                  id
                }
              }
            }
          }
        `}
        render={data => (
          <Layout>
            <SEO title="Tags" description="zafar.a.ali2@gmail.com" />
            <Container>
              <PageTitle>Tags</PageTitle>
              <div className="tagsContainer">
                {data.allContentfulTag.edges.map(function(edge) {
                  return (
                    <a
                      key={edge.node.title}
                      href={`/tag/${edge.node.title.toLowerCase()}`}
                    >
                      {edge.node.title}
                    </a>
                  )
                })}
              </div>
            </Container>
          </Layout>
        )}
      />
    )
  }
}
