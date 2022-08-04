import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import Grid from "@mui/material/Grid"
import ButtonGroup from "@mui/material/ButtonGroup"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./styles/header.css"

const resources = ["Queries", "WYWM", "etc"]
const events = ["Conferences", "Training", "blah blah"]
const solutions = ["Dashboards", "Apps", "etc"]
const learning = ["Policy", "Data Dictionaries", "etc"]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElResource, setAnchorElResource] = React.useState(null)
  const [anchorElEvent, setAnchorElEvent] = React.useState(null)
  const [anchorElSolution, setAnchorElSolution] = React.useState(null)
  const [anchorElLearn, setAnchorElLearn] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenResourceMenu = (event) => {
    setAnchorElResource(event.currentTarget)
  }

  const handleOpenEventMenu = (event) => {
    setAnchorElEvent(event.currentTarget)
  }

  const handleOpenSolutionMenu = (event) => {
    setAnchorElSolution(event.currentTarget)
  }

  const handleOpenLearnMenu = (event) => {
    setAnchorElLearn(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseResourceMenu = () => {
    setAnchorElResource(null)
  }

  const handleCloseEventMenu = () => {
    setAnchorElEvent(null)
  }

  const handleCloseSolutionMenu = () => {
    setAnchorElSolution(null)
  }

  const handleCloseLearnMenu = () => {
    setAnchorElLearn(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth={500}>
        <Toolbar disableGutters>
          <StaticImage
            src="../../../img/ca-digital-nexus-logo.png"
            alt="Digital Nexus"
            width={100}
            height={100}
            className={styles.site_logo}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DIGITAL NEXUS CA
          </Typography>

          <Grid
            container
            rowspacing={1}
            direction="row"
            justifyContent="flex-end"
            alignItems="cennter"
          >
            <ButtonGroup>
              {/* About Button */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  key="About"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  About
                </Button>
              </Box>

              {/* Resources Button */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  key="Resources"
                  onClick={handleOpenResourceMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Resources
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElResource}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElResource)}
                  onClose={handleCloseResourceMenu}
                >
                  {resources.map((resource) => (
                    <MenuItem key={resource} onClick={handleCloseResourceMenu}>
                      <Typography textAlign="center">{resource}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Events Button */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  key="Events"
                  onClick={handleOpenEventMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Events
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElEvent}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElEvent)}
                  onClose={handleCloseEventMenu}
                >
                  {events.map((event) => (
                    <MenuItem key={event} onClick={handleCloseEventMenu}>
                      <Typography textAlign="center">{event}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Solutions Button */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  key="Solutions"
                  onClick={handleOpenSolutionMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Solutions
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElSolution}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElSolution)}
                  onClose={handleCloseSolutionMenu}
                >
                  {solutions.map((solution) => (
                    <MenuItem key={solution} onClick={handleCloseSolutionMenu}>
                      <Typography textAlign="center">{solution}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Learn Button */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  key="Learn"
                  onClick={handleOpenLearnMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Learn
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElLearn}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElLearn)}
                  onClose={handleCloseLearnMenu}
                >
                  {learning.map((learn) => (
                    <MenuItem key={learn} onClick={handleCloseLearnMenu}>
                      <Typography textAlign="center">{learn}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Contact Button */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  key="Contact"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Contact
                </Button>
              </Box>
            </ButtonGroup>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
