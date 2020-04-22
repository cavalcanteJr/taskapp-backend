const User = require('../models/User')
const Tasks = require('../models/Tasks')

module.exports = {
    async index(req, res) {
        const { user } = req.headers;
    
        const task = await Tasks.find({ user: user })
    
        return res.json(task)
      },
      async store(req, res){
        const { title, priority, note } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if (!user) {
        return res.status(400).json({ error: 'User does not exists' })
        }

        const task = await Tasks.create({
        user: user_id,
        title,
        priority,
        note
        })

        return res.json(task)
      },
      async destroy(req, res){
        const { user_id, task_id} = req.headers

        const user = await User.findById(user_id)
        const task = await Tasks.findById(task_id)


        if (!user) {
          return res.status(400).json({ error: 'User does not exists' })
        }
        if (!task) {
          return res.status(400).json({ error: 'Task does not exists' })
        }

        const taskDeleted = await Tasks.deleteOne({
          user: user_id,
          _id: task_id
          },
          function (err){
            if(err) console.log(err);
            return res.json("Successful deletion")
          })

      },
      async update(req, res){
        const { title, priority, note } = req.body

        const { user_id, task_id } = req.headers

        const user = await User.findById(user_id)

        if (!user) {
          return res.status(400).json({ error: 'User does not exists' })
        }

        const task = await Tasks.findById(task_id).update({
          title,
          priority,
          note
        },
        function (err){
          if(err) console.log(err);        
        })

        return res.json(task)

        
        // const task = await Tasks.updateOne({
        //   user: user_id,
        //   _id: task_id,
        //   title,
        //   priority,
        //   note
        //   },
        //   function (err){
        //     if(err) console.log(err);
        //     return res.json(task)
        //   })

      }

    
}