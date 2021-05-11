import React from 'react';
import { Typography } from '@material-ui/core';

import Card from '../Card';

const CityCard = (props) => {
  const { name, country, cover } = props;

  return (
    <Card cover={cover}>
      <Typography gutterBottom variant="h5" component="h2">
        {`${name}, ${country}`}
      </Typography>
    </Card>
  );
};

export default CityCard;
