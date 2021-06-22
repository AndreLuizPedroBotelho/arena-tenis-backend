class NotFoundRoute {
  route(app) {
    app.use(function (req, res) {
      res.status(404).json({
        message: `Route '${req.originalUrl}' doesn't found!`
      });
    });
    return app
  }
}

export default new NotFoundRoute()
