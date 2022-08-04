import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./styles/header.css"

const Header = ({ siteTitle, siteDescription }) => (
  <header id="site-header" className={styles.masthead} role="banner">
    <div className={styles.masthead_info}>
      <Link to="/">
        <StaticImage
          src="../../../img/ca-digital-nexus-logo.png"
          alt="Digital Nexus"
          width={100}
          height={100}
          className={styles.site_logo}
        />

        <div className={styles.site_title}>{siteTitle}</div>
        <div>{siteDescription}</div>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
  menuLinks: [],
}

export default Header
