import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppLogo from "../assets/images/logo03.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import ForumIcon from "@mui/icons-material/Forum";
import FavoriteIcon from "@mui/icons-material/Favorite";

const drawerWidth = 240;

export default function AdminNavbar(props) {
  const { propName } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          placeItems: "center",
          gap: "10px",
        }}
      >
        <img src={AppLogo} alt="AppLogo" height="60px" width="60px" />
        <Box sx={{ display: "flex" }}>
          <Typography color={"red"} variant="h6">
            Food
          </Typography>
          <Typography variant="h6">Fantasy</Typography>
        </Box>
      </Box>

      <Divider />
      <List>
        <Link to="/admin" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem key={1} disablePadding>
            <ListItemButton sx={{ marginLeft: "5%" }}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          to="/admin/items"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem key={2} disablePadding>
            <ListItemButton sx={{ marginLeft: "5%" }}>
              <ListItemIcon>
                <FastfoodIcon sx={{ color: "yellowgreen" }} />
              </ListItemIcon>
              <ListItemText primary={"items"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          to="/admin/orders"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem key={3} disablePadding>
            <ListItemButton sx={{ marginLeft: "5%" }}>
              <ListItemIcon>
                <WhereToVoteIcon sx={{ color: "orange" }} />
              </ListItemIcon>
              <ListItemText primary={"Orders"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          to="/admin/reservation"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem key={4} disablePadding>
            <ListItemButton sx={{ marginLeft: "5%" }}>
              <ListItemIcon>
                <MobileFriendlyIcon sx={{ color: "purple" }} />
              </ListItemIcon>
              <ListItemText primary={"Reservation"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link
          to="/admin/feedbacks"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem key={6} disablePadding>
            <ListItemButton sx={{ marginLeft: "5%" }}>
              <ListItemIcon>
                <ForumIcon sx={{ color: "teal" }} />
              </ListItemIcon>
              <ListItemText primary={"Feedbacks"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          to="/admin/favourite"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem key={7} disablePadding>
            <ListItemButton sx={{ marginLeft: "5%" }}>
              <ListItemIcon>
                <FavoriteIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary={"Favourite"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: calc(100 % -` ${drawerWidth}px`) },
          ml: {
            sm: ` ${drawerWidth}px`,
            background: "white",
            color: "black",
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <LunchDiningIcon />
          </IconButton>
          {/* -------------- */}
          {/* passing the prop name as the page header  */}
          {/* ------------------ */}
          {propName}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            position: "static",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: calc(100 % -`${drawerWidth}px`) },
        }}
      ></Box>
    </Box>
  );
}
