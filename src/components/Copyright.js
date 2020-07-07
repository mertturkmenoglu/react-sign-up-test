import React, {Component} from "react";
import {Typography, Link} from "@material-ui/core";

export class Copyright extends Component {
    render() {
        return (
            <Typography
                variant="body2"
                color="textSecondary"
                align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://mertturkmenoglu.github.io/">
                    Mert Turkmenoglu
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        )
    }
}

export default Copyright;
