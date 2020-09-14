module.exports = (router) => {
  router.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
  });
};
