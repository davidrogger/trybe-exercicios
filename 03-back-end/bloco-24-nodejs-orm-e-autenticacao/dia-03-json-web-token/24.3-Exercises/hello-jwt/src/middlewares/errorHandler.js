module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch(name) {
    case 'ValidationError':
    res.status(404).json({ message });
    break;
    default:
    res.status(500).json({ message });
  }
};
