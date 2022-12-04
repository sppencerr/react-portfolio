import { React, Component, createRef } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { CONTENT } from "../cont/cont";
import About from "./aboutMe";
import Education from "./education";
import Skills from "./skills";
import Projects from "./projects";
import Socials from "./socials";
import Experience from "./experience";
import "../css/main.css";
import { motion } from "framer-motion"