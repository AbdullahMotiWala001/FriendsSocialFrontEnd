import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import useState from 'react-hook-use-state';
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { app } from './Firebase';


const Signup = () => {
    const navigate = useNavigate();
    let name, value

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        // gender: null,
    })

    const getUser = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
    }

    // const getUser = (e) => {
    //     setUser({
    //         name: e.target.value,
    //         email: "",
    //         phone: "",
    //         password: "",
    //         gender: null,
    //     })
    // }

    //
    const fireBaseSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("You have successfully Signup")
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
    };

    const paperStyle = {
        padding: 20,
        margin: '20px auto',
        width: 300,
        height: '70vh'
    };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const marginTop = { marginTop: 5 };

    return (
        <div className="form">
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant="caption" gutterBottom>
                            Please fill this form to create an account !
                        </Typography>
                    </Grid>
                    <form>
                        <TextField onChange={getUser} fullWidth label="Name" value={user.name} name="name" />
                        <TextField onChange={getUser} fullWidth label="Email" value={user.email} name="email" />

                        <TextField
                            fullWidth
                            label="Phone Number"
                            placeholder="Enter your phone number"
                            value={user.phone}
                            onChange={getUser}
                            name="phone"
                        />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                style={{ display: "initial" }}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Password"
                            placeholder="Enter your password"
                            value={user.password}
                            onChange={getUser}
                            name="password"
                        />

                        <Button onClick={fireBaseSignUp} variant="contained" color="primary" style={{ margin: '10px' }} >
                            Sign up
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default Signup;