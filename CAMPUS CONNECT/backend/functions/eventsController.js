exports.registerEvent = (req, res) => {
  // TODO: store event in DB
  res.json({ msg: "Event registered" });
};

exports.getEvents = (req, res) => {
  // TODO: fetch events
  res.json({ events: [] });
};
