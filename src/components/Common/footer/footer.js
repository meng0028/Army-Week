import React from "react"
import { StaticImage } from "gatsby-plugin-image"
//import crest from '../../../../img/army-footer-crest.png'
//import nationaldefense from '../../../../img/national-defense.png'
//import canada from '../../../../img/canada.gif'
import "./styles/footer.css"

import useMediaQuery from "@mui/material/useMediaQuery"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const Footer = ({}) => {
  const matches = useMediaQuery("(max-width:500px)")

  return !matches ? (
    <div className="footer">
      <Grid
        container
        alignItems="space-between"
        justifyContent="center"
        spacing={0}
      >
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align="left">
          <StaticImage
            src="../../../img/national-defense.png"
            alt="National Defense"
            width={100}
            style={{ marginTop: "45px", marginLeft: "5px" }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align="center">
          <StaticImage
            src="../../../img/army-footer-crest.png"
            alt="Canadian Army Crest"
            height={75}
            style={{ marginTop: "-10px" }}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align="right">
          <StaticImage
            src="../../../img/canada.gif"
            alt="Canada"
            width={100}
            style={{ marginTop: "40px", marginRight: "5px" }}
          />
        </Grid>
      </Grid>
    </div>
  ) : (
    <div className="footer-mobile">
      <Grid
        container
        alignItems="space-between"
        justifyContent="center"
        spacing={0}
      >
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align="left">
          <StaticImage
            src="../../../../img/national-defense.png"
            alt="National Defense"
            width={100}
            style={{ marginTop: "45px", marginLeft: "5px" }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align="center">
          <StaticImage
            src="../../../../img/army-footer-crest.png"
            alt="Canadian Army Crest"
            height={75}
            style={{ marginTop: "-10px" }}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align="right">
          <StaticImage
            src="../../../../img/canada.gif"
            alt="Canada"
            width={100}
            style={{ marginTop: "40px", marginRight: "5px" }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
