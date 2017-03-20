module.exports = (app) => {
  app.get('/search/:city', (req, res) => {
    console.log('XXX ', req.params.city);
  });
};
