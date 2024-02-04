import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
            position: "sticky",
            background: "#000",
            top: 3,
            justifyContent: "space-between",
        }}
    >
        <Link
            to="/"
            style={{ display: "flex", alignItems: "center" }}
        >
            <img
                src={logo}
                alt="logo"
                height={45}
            />
            <Typography
            className="heading"
                variant="h4"
                fontWeight="bold"
                ml={2}
                sx={{ color: "#eee" }}
            ><span style={{ color: "#F31503" }}>Ytube</span>
            </Typography>
        </Link>
        <SearchBar />
    </Stack>
);

export default Navbar;
