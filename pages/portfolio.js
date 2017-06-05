import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
const styles={
  link:{
    color:'black',
    fontFamily:'Ubuntu'
  },
  text:{
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
        <ul style={styles.text}>
          <li><a style={styles.link} href='http://teethemes.com:3000'> Web application(in progress)</a> based on NodeJs, Angular 1.5, mongoDb</li>
          <li><a style={styles.link} href='http://sowdan.com'>Sowdan</a> - mobile applications with ionic</li>
          <li><a style={styles.link} href='http://themeforest.net/item/bishop-opencart-responsive-theme/11607490'>Bishop</a> - opencart template</li>
          <li><a style={styles.link} href='http://teethemes.com'>T-themes</a> - landing page</li>
          <li><a style={styles.link} href='http://themeforest.net/item/the-blazze-blog-and-magazine-html-site-template/11251890'>The Blazze</a> - HTML template</li>
          <li><a style={styles.link} href='https://creativemarket.com/teethemes/635708-One-fashion-day'>One fashion Day</a> - Under construction template</li>
          <li><a style={styles.link} href='http://templates.teethemes.com/megaplace/'>Megaplace</a> - ecommecrce template</li>
          <li><a style={styles.link} href='http://stereolab.com.ua/'>Stereolab</a> - opencart ecommerce website</li>
        </ul>       
      </div>
    )
  }
}
