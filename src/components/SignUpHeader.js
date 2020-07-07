import React, {Component} from "react";
import Avatar from "@material-ui/core/Avatar";
import {AccountBoxOutlined} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

export class SignUpHeader extends Component {
    render() {
        return (
            <div className='paper'>
                <Avatar className='avatar'>
                    <AccountBoxOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
            </div>
        )
    }
}

export default SignUpHeader;
