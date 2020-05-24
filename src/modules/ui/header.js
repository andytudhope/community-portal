/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {jsx} from 'theme-ui'
import { Icon } from "@makerdao/dai-ui-icons";

const Header = ({ siteTitle }) => (
  <header sx={{bg: 'primary', marginBottom: '1.45rem'}}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        'alignItems': 'center'
      }}
    >
      <Icon name="dai_round_color" color="primary" size={5}/>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
