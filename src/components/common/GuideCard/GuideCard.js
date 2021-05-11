import React from 'react';
import { Typography } from '@material-ui/core';

import Card from '../Card';

const CityCard = (props) => {
  const { name, description, cover } = props;

  return (
    <Card cover={cover}>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      {description && (
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      )}
    </Card>
  );
};

export default CityCard;
