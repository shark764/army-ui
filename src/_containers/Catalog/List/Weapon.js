import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Backspace, Edit, ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import { useStyles } from '../../../styles';
import { textTruncate } from '../../../utils';
import { useHistory } from 'react-router-dom';

function Weapon({ weapon, handleRemove }) {
  const [expanded, setExpanded] = React.useState(false);
  const history = useHistory();
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card /* className={classes.card} */>
        <CardMedia
          className={classes.cardMedia}
          image={weapon.imageUrl}
          title={weapon.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {weapon.name}
          </Typography>
          <Typography>{textTruncate(weapon.description)}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={() => history.push(`/update/${weapon.id}`)}
          >
            <Edit />
          </IconButton>
          <IconButton
            aria-label="remove"
            color="secondary"
            onClick={() => handleRemove(weapon.id)}
          >
            <Backspace />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography display="inline" variant="h6">
              Type:
            </Typography>
            {` `}
            <Typography display="inline">{weapon.type}</Typography>

            <Typography display="block" />

            <Typography paragraph display="inline" variant="h6">
              Calibre:
            </Typography>
            {` `}
            <Typography paragraph display="inline">
              {weapon.calibre}
            </Typography>

            <Typography display="block" />

            <Typography paragraph variant="h6">
              Description:
            </Typography>
            <Typography paragraph align="justify">
              {weapon.description}
            </Typography>

            <Typography paragraph variant="h6">
              Features:
            </Typography>
            <Typography paragraph align="justify">
              {weapon.features}
            </Typography>

            <Typography paragraph variant="h6">
              Distribution:
            </Typography>
            <Typography paragraph align="justify">
              {weapon.distribution}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default Weapon;
