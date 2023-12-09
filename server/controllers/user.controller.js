class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;
    console.log(req.body)
    return res.json('user');
  }
}
module.exports = new UserController();