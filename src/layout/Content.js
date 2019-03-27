import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    containerStyle: {
        marginTop: '72px',
    },
    contentStyle: {
        padding: '16px',
    },
});

const Content = (props) => {
    const { children, classes } = props;
    return (
        <Grid className={classes.containerStyle} container direction={'row'} justify={'center'} alignItems={'flex-start'}>
            <Grid className={classes.contentStyle} item xs={12} md={6}>
                {children}
            </Grid>
        </Grid>
    );
};

Content.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.element,
    ]).isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);