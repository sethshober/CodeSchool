// node index.js
var pg = require('pg');
var settings = "postgres://localhost/postgres"; // "postgres://username:password@localhost/database";
var env = process.env.NODE_ENV || 'development';
var knexConfig = require('./knexfile.js')[env];
var knex = require('knex')(knexConfig);
var bookshelf = require('bookshelf')(knex);
var id = process.argv[2];

var Country = bookshelf.Model.extend({
  tableName: 'countries'
});

if (process.argv.length <= 2) { return console.error('please provide an id to look up'); }

pg.connect(settings, function(err, client, done) {
  if (err) { return console.error('error fetching client from pool', err); }

  client.query('select * from people where id = $1::int', [id], function(err, result) {
    done();

    if (err) { return console.error('error running query', err); }
    console.log('%j', result.rows[0]);

    pg.end(); // completely finished with the database for this app
  });
});


// new Country({ name: 'Canada' }).save().... also works
Country.forge({ name: 'Canada' }).save().then(function(country) {
  console.log('created a country %j', country.toJSON());
})
.done();

Country.where({ name: 'Canada' }).fetchAll().then(function(result) {
  console.log(result.toJSON());
})
.done();