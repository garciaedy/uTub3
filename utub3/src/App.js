import React, { Component } from 'react'
import {Grid} from '@material-ui/core';
import Utub3 from './api/Utub3'

export default class App extends Component {
    render() {
        return (
            <Grid justify="center" container spacing={16} >
            <Grid item xs={12} >
            <Grid container spacing = {16}>
             <Grid item xs={12} >
           {/*SEARCH BAR */}
            </Grid>
             <Grid item xs={8} >
             {/* Video List*/}
            </Grid>
            <Grid item xs={4} >
            </Grid>
            </Grid>
            </Grid>
            </Grid>
        )
    }
}
