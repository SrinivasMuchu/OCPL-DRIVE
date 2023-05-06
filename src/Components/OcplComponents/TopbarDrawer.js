import React, { useState} from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";


export default function MenuDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" style={{color:"#6F00FF"}}/>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
        <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="/register">
            <p className="link">Register</p>
          </a>
          <a href="/login">
            <p className="link">Login</p>
            </a>
            <a href="/account">
            <p className="link">Account</p>
            </a>
          
        </div>
      </Drawer>
    </div>
  );
}
