import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

const styles={
  navigation:{
    background:'yellow',
    width:'100%',
    marginBottom: rhythm(1)
  },
  list:{
    display:'table',
    width:'100%',
    maxWidth:960,
    margin:'0 auto',
  },
  listItem:{
    display:'table-cell',
    textAlign:'center',
    padding:`${rhythm(1)} ${rhythm(3 / 4)}`
  },
  first:{
    display:'table-cell',
    padding:`${rhythm(1)} ${rhythm(3 / 4)}`,
    textAlign:'left'
  },
  last:{
    display:'table-cell',
    padding:`${rhythm(1)} ${rhythm(3 / 4)}`,
    textAlign:'right'
  }
}
export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <div
          style={{
            background: `rebeccapurple`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to={prefixLink("/")}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Homepage
              </Link>
            </h1>
          </div>
        </div>
           <nav style={styles.navigation}> 
             <ul style={styles.list}>
                <li style={styles.listItem,styles.first}><h3><Link to={prefixLink('/')}>Main</Link></h3></li>
                <li style={styles.listItem}><h3><Link to={prefixLink('/skills/')}>Skills</Link></h3></li>
                <li style={styles.listItem}><h3><Link to={prefixLink('/portfolio/')}>Portfolio</Link></h3></li>
                <li style={styles.listItem,styles.last}><h3><Link to={prefixLink('/contacts/')}>Contacts</Link></h3></li>
              </ul>
            </nav>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>

      </div>
    )
  }
}
