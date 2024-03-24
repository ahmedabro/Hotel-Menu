import React from 'react'
import innerBannerBg from '../assets/innerBanner.jpg'
import abtBannerBg from '../assets/abtBanner.jpg'
import { Container, Row } from 'react-bootstrap'

const InnerBanner = (props) => {
  return (
    <section style={props.title === "About Me" ? {backgroundImage: `url(${abtBannerBg})`} : {backgroundImage: `url(${innerBannerBg})`}} className='inner-banner'>
      <Container>
        <Row>
            <h1>{props.title}</h1>
        </Row>
      </Container>
    </section>
  )
}

export default InnerBanner
