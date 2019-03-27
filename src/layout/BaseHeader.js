import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Grid from '@material-ui/core/Grid/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
    appBarStyle: {
        height: '56px',
        padding: '24px',
    },
    logo: {
        width: '72px',
        height: '16px',
        backgroundSize: 'contain',
        cursor: 'pointer',
    },
});

const BaseHeader = ({ classes }) => (
    <AppBar className={classes.appBarStyle}>
        <Grid container direction={'row'} justify={'space-between'} alignItems={'center'}>
            <Grid item>
                <div className={classes.logo} />
            </Grid>
            <Grid item>
                ACTIONS
            </Grid>
        </Grid>
    </AppBar>
);

BaseHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaseHeader);
