'use strict';

let express = require('express'),
  _ = require('lodash'),
  router = express.Router(),
  widgets = [
    {
      id: 'abc122',
      color: 'red',
      size: 'large',
      prongs: 10
    },
    {
      id: 'abc123',
      color: 'orange',
      size: 'small',
      prongs: 11
    },
    {
      id: 'abc124',
      color: 'green',
      size: 'medium',
      prongs: 12
    },
    {
      id: 'abc125',
      color: 'black',
      size: 'xl',
      prongs: 15
    }
  ];

router.get('/', (req, res, next) => {
  res.json(widgets);
});

router.get('/:widgetId', (req, res, next) => {
  let id = req.params.widgetId,
    widget = _.find(widgets, {id});
  
  res.json(widget);
});

module.exports = router;
