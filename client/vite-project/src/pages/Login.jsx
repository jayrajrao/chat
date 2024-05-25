import React, { useState } from 'react'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { useInputValidation, useStrongPassword, } from '6pp'
import { useFileHandler } from '6pp';
import { VisuallyHiddenInput } from '../components/styles/StyledComponent';
import { usernameValidator } from '../utils/validators';
const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    // const toggleLogin = () => setIsLogin(false)
    const toggleLogin = () => setIsLogin(prev => !prev)
    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useStrongPassword("");
 
    const avatar = useFileHandler("single", 5);
    const handleLogin = (e) => {
        e.preventDefault();
    }
    const handleSignUp = (e) => {
        e.preventDefault();
    }
    return (
    <div style={{backgroundImage:"linear-gradient(rgb(195 102 102), rgb(128 136 193))   ",}}><Container component={"main"} maxWidth="xs" sx={{
        height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"
    }}> 
        <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column ", alignItems: "center" }}>
            {
                isLogin ? (
                    <>
                        <Typography variant='h5'>login</Typography>
                        <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
                            <TextField required fullWidth label="Username"
                                margin='normal'
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler} />
                            <TextField required fullWidth label="Password"
                                type='password'
                                margin='normal'
                                variant='outlined'
                                value={password.value}
                                onChange={password.changeHandler} />
                            <Button sx={{ marginTop: "1rem" }} variant='contained' color='primary' type='submit' fullWidth>Login</Button>
                            <Typography textAlign={'center'} m={"1rem"}>Or</Typography>
                            <Button sx={{ marginTop: "-0.9rem" }} variant='text' fullWidth onClick={toggleLogin}>
                                register </Button>
                        </form>
                        
                    </>
                ) : (
                    // <span>register</span>
                    <>
                       
                        <form style={{ width: "100%", marginTop: "0.1rem", }} onSubmit={handleSignUp}>
                            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain", }} src={avatar.preview} />
                                {avatar.error && (
                                    <Typography color="error" variant='caption'>
                                        {avatar.error}
                                    </Typography>
                                )}
                                <IconButton sx={{
                                    position: "absolute",
                                    bottom: "0",
                                    right: "0",
                                    color: "white",
                                    bgcolor: "rgba(0,0,0,0.5)",
                                    ":hover": {
                                        bgcolor: "rgba(0,0,0,0.7)"
                                    }
                                }} component="label">
                                    <>
                                        <CameraAltIcon />
                                        <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                                    </>
                                </IconButton>
                            </Stack>
                            <TextField required fullWidth label="Name"
                                margin='normal'
                                variant='outlined'
                                value={name.value}
                                onChange={name.changeHandler} />
                            <TextField required fullWidth label="Bio"
                                margin='normal'
                                variant='outlined'
                                value={bio.value}
                                onChange={bio.changeHandler} />
                            <TextField required fullWidth label="Username"
                                margin='normal'
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler} />
                            {
                                username.error && (
                                    <Typography color="error" variant='caption'>
                                        {username.error}
                                    </Typography>
                                )
                            }

                            <TextField required fullWidth label="Password"
                                type='password'
                                margin='normal'
                                variant='outlined'
                                value={password.value}
                                onChange={password.changeHandler} />
                            {
                                password.error && (
                                    <Typography color="error" variant='caption'>
                                        {password.error}
                                    </Typography>
                                )
                            }
                            <Button sx={{ marginTop: "0.5rem" }} variant='contained' color='primary' type='submit' fullWidth>Sign Up</Button>
                            <Typography textAlign={'center'} m={"0.5rem"}>Or</Typography>
                            <Button sx={{ marginTop: "-0.6rem" }} variant='text' fullWidth onClick={toggleLogin}>
                                Login Instead </Button>
                        </form>
                    </>
                )}
        </Paper>
    </Container>
    </div>
    
    );
};

export default Login