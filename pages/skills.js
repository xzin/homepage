import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
const styles={
  item:{
    listStyleType:'square',
    fontFamily:'Ubuntu'
  }
}
export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Skills
        </h1>
        <ul>
          <li style={styles.item}>HTML5</li>
          <li style={styles.item}>CSS3</li>
          <li style={styles.item}>SCSS</li>
          <li style={styles.item}>JavaScript</li>
          <li style={styles.item}>JQuery</li>
          <li style={styles.item}>AngularJS</li>
          <li style={styles.item}>NodeJS</li>
          <li style={styles.item}>Mongodb</li>
        </ul>
      </div>
    )
  }
}
