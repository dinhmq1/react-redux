var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};


var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/entity_form';
var db = pgp(connectionString);

function getAllEntityForms(req, res, next) {
  db.any('select * from entity ORDER BY id ASC')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL entity forms'
        });
    })
    .catch(function (err) {
      return next(err);
    })
}


module.exports = {
    getAllEntityForms: getAllEntityForms,
};
