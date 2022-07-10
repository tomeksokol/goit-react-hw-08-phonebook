import React from "react";

import { List } from "@mui/material";
import { Contact } from "../contacts/Contact";

export const ContactList = () => {
  return (
    <div>
      <List
        sx={{
          maxWidth: "400px",
          margin: "0 auto",
        }}>
        <Contact />
      </List>
    </div>
  );
};
