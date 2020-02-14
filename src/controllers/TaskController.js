const User = require('../models/User');
const Tasks = require('../models/Tasks');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;
    
        const task = await Tasks.find({ user: user });
    
        return res.json(task);
      },
      async store(req, res){
        const { title, priority, note } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
        return res.status(400).json({ error: 'User does not exists' });
        }

        const task = await Tasks.create({
        user: user_id,
        title,
        priority,
        note
        })

        return res.json(task)
      }

    
}