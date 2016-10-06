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

function validateWidget(req, res, next) {
  //Do validation here
  if (!req.body.color || !req.body.size || !req.body.prongs) {
    var error = new Error('Your widget is lacking required fields');
    error.status = 409;
    
    next(error);
  } else {
    next(); 
  }
}

function postWidget(req, res, next) {
  widgets.push(req.body);
  res.json(widgets);
}

router.post('/', validateWidget, postWidget);

router.get('/:widgetId', (req, res, next) => {
  let id = req.params.widgetId,
    widget = _.find(widgets, {id});

  if (!widget) {
    res.status(404);
    res.send('Could not find your widget...Sorry.');
  } else {
    res.json(widget);
  }
});

router.patch('/:widgetId', (req, res, next) => {
  let id = req.params.widgetId,
    widget = _.find(widgets, {id});

  _.merge(widget, req.body);

  res.json(widget);
});

router.delete('/:widgetId', (req, res, next) => {
  _.remove(widgets, {id: req.params.widgetId});
  res.json(widgets);
});

module.exports = router;
