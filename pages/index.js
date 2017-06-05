import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

const styles={
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
          Hi,people
        </h1>
        <img style={{float:'left',marginRight:'10px',marginBottom:'10px',borderRadius:'50%'}} src='https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-1/p160x160/15107378_1149339275145515_3665289857492977973_n.jpg?oh=8f2b82eb2b8b33dda5eac07035495ec8&oe=59A8845F'/>
        <p style={styles.text}>My name is Alex. I am frontend-developer from Ukraine. This is my homepage. I'm looking for front-end developer or Javascript  developer position in  outsourcing  IT-company to work with interesting projects. I have Master's degree  on a speciality “Automation of technological processes and the computer-integrated technologies”</p>
        
       
      </div>
    )
  }
}
