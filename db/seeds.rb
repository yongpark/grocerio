# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create({username: 'guest', password: 'password'})
list1 = guest.owned_lists.create({user_id: 1, title: "Weekly Grocery list"})
list1.columns.create(list_id: list1.id, title: "To Buy", column_type: "to_buy")
list1.columns.create(list_id: list1.id, title: "Bought", column_type: "bought")
list1.columns.create(list_id: list1.id, title: "Expired", column_type: "expired")
list1.columns.create(list_id: list1.id, title: "Used", column_type: "used")
list2 = guest.owned_lists.create({user_id: 1, title: "4th of July Grocery list"})
list2.columns.create(list_id: list2.id, title: "To Buy", column_type: "to_buy")
list2.columns.create(list_id: list2.id, title: "Bought", column_type: "bought")
list2.columns.create(list_id: list2.id, title: "Expired", column_type: "expired")
list2.columns.create(list_id: list2.id, title: "Used", column_type: "used")
list3 = guest.owned_lists.create({user_id: 1, title: "Healthy Grocery list"})
list3.columns.create(list_id: list3.id, title: "To Buy", column_type: "to_buy")
list3.columns.create(list_id: list3.id, title: "Bought", column_type: "bought")
list3.columns.create(list_id: list3.id, title: "Expired", column_type: "expired")
list3.columns.create(list_id: list3.id, title: "Used", column_type: "used")
list1.gitems.create(column_id: list1.columns[0].id, title: "to buy test", expire_date: DateTime.parse("09/01/2017"))
