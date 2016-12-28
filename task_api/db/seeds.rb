# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Task.create(name:'Do workout')
Task.create(name:'Make breakfast')
Task.create(name:'Get Code')

Item.create(title:'Make 100 pushups', body:'Some text', task_id:1)
Item.create(title:'Run in wods', body:'Some text', task_id:1)

Item.create(title:'Bake bread', body:'Some text', task_id:2)
Item.create(title:'Make soup', body:'Some text', task_id:2)

Item.create(title:'Make this app work', body:'Some text', task_id:3)
Item.create(title:'Do some debuging', body:'Some text', task_id:3)

Comment.create(content:'Comment text Comment text Comment text Comment text Comment text', item_id:1)
Comment.create(content:'Comment text Comment text Comment text Comment text Comment text', item_id:3)
Comment.create(content:'Comment text Comment text Comment text Comment text Comment text', item_id:5)