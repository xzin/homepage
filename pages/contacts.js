import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

const styles={
  link:{
    fontFamily:'Ubuntu',
    color:'black',
    textDecoration:'none'
  }
}

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Contacts
        </h1>
        <p><Link  style={styles.link} to='mailto:holatchahl@gmail.com'>Email: holatchahl@gmail.com</Link></p>
        <p><Link  style={styles.link} to='skype:aitops'>Skype: aitops</Link></p>
      </div>
    )
  }
}
