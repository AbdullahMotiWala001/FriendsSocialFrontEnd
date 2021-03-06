import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@material-ui/core/Grid';


export default function QueryUser(props) {
    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="right"
                style={{ width: '350px', bgColor: 'brown' }}
            >
                <Grid item  >
                    <Card sx={{ maxWidth: 350, }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.queryDp}>
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={props.queryName}
                            onClick={props.show}
                        />
                    </Card>
                </Grid>
            </Grid >
            <p>PAk</p>
        </div>
    )
}
