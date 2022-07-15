"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractBearerToken = exports.checkTokenMiddleware = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SECRET_KEY_JWT = "$dsf54645sdfsdf545488dd122f4df454544yeyehjnsdsd$$$sddskjkj";
/* Récupération du header bearer */

var extractBearerToken = function extractBearerToken(headerValue) {
  if (typeof headerValue !== 'string') {
    return false;
  }

  var matches = headerValue.match(/(bearer)\s+(\S+)/i);
  return matches && matches[2];
};
/* Vérification du token */


exports.extractBearerToken = extractBearerToken;

var checkTokenMiddleware = function checkTokenMiddleware(req, res, next) {
  // Récupération du token
  var token = req.headers.authorization && extractBearerToken(req.headers.authorization);
  console.log(token); // Présence d'un token

  if (!token) {
    return res.status(401).json({
      error: 'Error. Need a token'
    });
  } // Véracité du token


  _jsonwebtoken["default"].verify(token, SECRET_KEY_JWT, function (err, decodedToken) {
    if (err) {
      res.status(401).json({
        error: 'Error. Bad token'
      });
    } else {
      return next();
    }
  });
};

exports.checkTokenMiddleware = checkTokenMiddleware;