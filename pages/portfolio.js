import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
const styles={
  link:{
    textDecoration:'none',
    color:'black',
    fontFamily:'Ubuntu'
  }
}
export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Portfolio
        </h1>
        <ul>
          <li><Link style={styles.link} to='http://teethemes.com:3000'> Web application(in progress) based on NodeJs, Angular 1.5, mongoDb</Link></li>
          <li><Link style={styles.link} to='http://sowdan.com'>Sowdan - mobile applications with ionic</Link></li>
          <li><Link style={styles.link} to='http://themeforest.net/item/bishop-opencart-responsive-theme/11607490'>Bishop - opencart template</Link></li>
          <li><Link style={styles.link} to='http://teethemes.com'>T-themes - landing page</Link></li>
          <li><Link style={styles.link} to='http://themeforest.net/item/the-blazze-blog-and-magazine-html-site-template/11251890'>The Blazze - HTML template</Link></li>
          <li><Link style={styles.link} to='https://creativemarket.com/teethemes/635708-One-fashion-day'>One fashion Day - Under construction template</Link></li>
          <li><Link style={styles.link} to='http://templates.teethemes.com/megaplace/'>Megaplace - ecommecrce template</Link></li>
          <li><Link style={styles.link} to='http://stereolab.com.ua/'>Stereolab - opencart ecommerce website</Link></li>
        </ul>       
      </div>
    )
  }
}
