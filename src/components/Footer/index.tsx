import { Row, Col } from 'antd'
import { withTranslation } from 'react-i18next'
import { SvgIcon } from '../../common/SvgIcon'
import Container from '../../common/Container'

import i18n from 'i18next'
import {
  FooterSection,
  Para,
  Empty,
  Language,
} from './styles'

interface SocialLinkProps {
  href: string
  src: string
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language)
  }

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    )
  }

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" align="top">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t('Address')}</Language>
              <Para>IoT Lab</Para>
              <Para>TIDES Office Building</Para>
              <Para>IIT Roorkee</Para>
              <Para>Roorkee Uttarakhand</Para>
            </Col>
          </Row>
          <Row justify="space-between"></Row>
        </Container>
      </FooterSection>
    </>
  )
}

export default withTranslation()(Footer)
