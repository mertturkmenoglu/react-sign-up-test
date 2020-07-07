import React, {Component} from "react";
import {Container, CssBaseline} from "@material-ui/core";
import SignUpHeader from "./SignUpHeader";
import SignUpForm from "./SignUpForm";
import Box from "@material-ui/core/Box";
import Copyright from "./Copyright";


export class SignUp extends Component {
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <SignUpHeader />
                <SignUpForm />
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        )
    }
}
