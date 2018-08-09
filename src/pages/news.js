import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'
import turnaround from '../assets/images/turnaround.svg'
import ahead from '../assets/images/ahead.svg'
import turnright from '../assets/images/turnright.svg'
import ccclogo from '../assets/images/ccc-logo-small.svg'
import turnaroundhm from '../assets/images/turnaroundhm.png'
import wemove from '../assets/images/wemove.png'

import { Accordion, AccordionItem } from '../components/accordion';
import TwitterTimeline from '../components/Twitterembed'


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }



  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle}>
          {/* OpenGraph tags */}
          <meta property="og:url" content="https://turnaroundhm.org/news" />
          <meta property="og:title" content="Turn Around H&M" />
          <meta property="og:description" content="Let's make sure H&M starts paying a living wage" />
          <meta property="og:image" content="https://turnaroundhm.org/static/turnaroundhm.ace3460e.png" />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="463882227038771" />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:creator" content="cleanclothes"
          />
          <meta name="twitter:title" content="Turn Around H&M" />
          <meta name="twitter:description" content="Let's make sure H&M starts paying a living wage" />
          <meta name="twitter:image" content="https://turnaroundhm.org/static/turnaroundhm.ace3460e.png" />
        </Helmet>

        <Header />



        <div id="main">


          <section id="news" className="main ">
            <header className="major">
              <h2>News</h2>
            </header>
            <div className="content">
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title')
              const url = get(node, 'frontmatter.path' )
              return (
                <div key={node.frontmatter.title}>
                  <small>{node.frontmatter.date}</small>
                  <h4 className="content">
                    <Link to={url}>
                      {title}
                    </Link>
                  </h4>


                  <p  dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  <ul className="actions">
                    <li><Link to={url} className="button">Learn More</Link></li>
                  </ul>
                </div>
              )
            })}
            </div>

          </section>



        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query newsQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;