exports.google = (req, res) => {
  const io = req.app.get('io')
  const user = {
    name: req.user.displayName,
    photo: req.user.photos[0].value.replace(/sz=50/gi, 'sz=250'),
    registered: false,
  }
  console.log(req.user);
  io.in(req.session.socketId).emit('google', user)
}

exports.facebook = (req, res) => {
  const io = req.app.get('io')
  const { givenName, familyName } = req.user.name
  const user = {
    name: `${givenName} ${familyName}`,
    photo: req.user.photos[0].value,
    registered: false,
  }
  console.log(req.user);
  io.in(req.session.socketId).emit('facebook', user)
}
