import { connect } from '@planetscale/database'
import express from 'express';
import ejs from 'ejs';
import fs from 'fs/promises';

// Config for PlanetScale
const config = {
  host: process.env.PLANETSCALE_DB_HOST,
  username: process.env.PLANETSCALE_DB_USERNAME,
  password: process.env.PLANETSCALE_DB_PASSWORD
}

const conn = connect(config)

let html = 'a'; // Global variable to store the HTML contents
let results = null; // Global variable to store the database results

// Read the contents of the HTML file and execute database query when the server starts up
function processRequest(req, res) {
  Promise.all([fs.readFile('./index.html', 'utf8'), conn.execute('SELECT * FROM college.College WHERE location=? AND course like %?% AND fees=? AND size=? AND cutoff=?', [req.params.location, req.params.course, req.params.fees, req.params.size, req.params.cutoff])])
    .then(([file, res]) => {
      html = file;
      results = res;
      // use html and results to generate the response
      // send the response back to the client using res.send() or res.render()
    })
    .catch((err) => {
      console.error('Error occurred while initializing server:', err);
      process.exit(1);
    });
}

const app = express();
app.get('/College', processRequest);

app.get('/index', (req, res) => {
  if (results === null) {
    res.status(500).send('Internal server error. Please try again later.');
    return;
  }
  const data = {
    rname: results.rows[0].name,
    rlocation: results.rows[0].location,
    rcourse: results.rows[0].course,
    rfees: results.rows[0].fees,
    rsize: results.rows[0].size,
    rcutoff: results.rows[0].cutoff,
    rratings: results.rows[0].ratings,
  };
  const renderedHtml = ejs.render(html, data);
  res.send(renderedHtml);
});

app.use(express.static('.'));

app.listen(4000, () => {
  console.log('Server started on port 4000');
  console.log(html);
});