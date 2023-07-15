const ToDoController = {

  getList: (req, res) => {
    res.send([
      {
        id: 1,
        todo: "A"
      },
      {
        id: 2,
        todo: "B"
      }
    ]);
  },

  getItem: (req, res) => {
    res.send({
      id: 1,
      todo: "A"
    });
  },

  add: (req, res) => {
    res.send({
      message: 'Do you want to add To-Do data?',
      data: req.body
    })
  },

  update: (req, res) => {
    res.send({
      message: 'Do you want to update To-Do data?',
      data: {
        params: req.params,
        body: req.body
      }
    })
  },

  delete: (req, res) => {
    res.send({
      message: 'Do you want to delete To-Do data?',
      data: {
        params: req.params
      }
    })
  }

}

module.exports = ToDoController;