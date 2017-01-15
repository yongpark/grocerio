# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create({username: 'guest', password: 'password'})
list1 = List.create({user_id: 1, title: "Weekly Grocery list"})
list2 = List.create({user_id: 1, title: "Super Bowl Grocery List"})
list3 = List.create({user_id: 1, title: "Weekend Party Grocery List"})
