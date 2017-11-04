/*jslint devel: true, node: true, eqeq: true, nomen: true, plusplus: true, regexp: true, sloppy: true, vars: true*/
var middleWare = {
  requireAuthentication: function (req, res, next) {
    console.log('private route hit!');
    next();
  },
  logger: function (req, res, next) {
    console.log(new Date().toString() + ' Request: ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

module.exports = middleWare;