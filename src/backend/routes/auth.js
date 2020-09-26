const firebase = require('firebase');

module.exports = (router) => {
  // endpoint for registering a new user
  router.post('/api/register', (req, res) => {
    /* res.data.status is true for a successful request, false with the error message as
          res.data.message as the error message for an unsuccessful request. */
    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
      .then(() => {
        res.send({
          status: true,
          message: 'User created!',
        });
      })
      .catch((error) => {
        res.send({
          status: false,
          message: error.message,
        });
      });
  });

  // endpoint for signing in a user
  router.post('/api/login', (req, res) => {
    // TODO: Validate req.body.email and req.body.password
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password);
    res.send('User logged in!');
  });
};
