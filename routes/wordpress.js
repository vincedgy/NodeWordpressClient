var express = require('express');
var router = express.Router();

var WPAPI = require('wpapi');
var wp = new WPAPI({ endpoint: 'https://cms.e-attestations.com/wpfournisseur/wp-json' });

/* GET Wordpress page. */
router.get('/', function (req, res, next) {

  console.log('Hi !')

  var body = ''

  // Promises
  wp.posts().then(function (data) {
    res.render('wordpress',
      {
        title: 'Wordpress Call',
        body: body
      }
    );
  }).catch(function (err) {
    res.render('wordpress',
    {
      title: 'Wordpress Call',
      body: 'Oups ! ' + err
    }
  );
  });

});

module.exports = router;
