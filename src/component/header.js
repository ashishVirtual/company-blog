"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  TextField,
} from "@mui/material";
import Link from "next/link";

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  if (!mounted) return null;

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar sx={{ backgroundColor: "white", color: "black" }}>
        <Container
          maxWidth="lg"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            My Website
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            sx={{ marginRight: "16px", input: { color: "black" } }}
          />
          <div>
            <Button color="inherit">
              <Link href="/" passHref>
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/about" passHref>
                About
              </Link>
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
