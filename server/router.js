module.exports = (app) => {
  app.get('/search/:city', (req, res) => {
    res.json({
      city: req.params.city,
      population: '1000000'
    });
  });
};
