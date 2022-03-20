import { AddIcCallOutlined } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React from "react";

export const totopbutton = () => {
  return (
    <div
      style={{
        position: "fixed",
        "z-index": 100,
        bottom: 0,
        right: 0,
      }}
    >
      <Fab color="primary" aria-label="add">
        <AddIcCallOutlined />
      </Fab>
    </div>
  );
};
export default totopbutton;
