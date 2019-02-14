const personController = (Person) => {
  const getList = (req, res) => {
    Person.find(req.query, (err, people) => {
      if (err) {
        res.status(400);
        return res.send(err);
      }
      return res.json(people);
    });
  };

  const get = (req, res) => res.json(req.person);

  const create = (req, res) => {
    const person = new Person(req.body);
    if (!person.firstName) {
      res.status(400);
      return res.send('Person must have a first name');
    }
    person.save();
    res.status(201);
    return res.json(person);
  };

  const update = (req, res) => {
    // eslint-disable-next-line
    if (req.body._id) {
      // eslint-disable-next-line
      delete req.body._id;
    }
    const person = Object.assign(req.person, req.body);
    person.save((err) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.send(person);
    });
  };

  const remove = (req, res) => {
    req.person.remove((err) => {
      if (err) {
        return res.status(400).send(err);
      }

      return res.sendStatus(204);
    });
  };

  return {
    create,
    get,
    getList,
    remove,
    update,
  };
};

module.exports = personController;
