# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

month = Date.today.month
day = Date.today.day + 7
if day >= 30
  difference = day - 30
  day = difference
end

guest = User.create({username: 'guest', password: 'password'})
list1 = guest.owned_lists.create({user_id: 1, title: "Breakfast Grocery list"})
list1column1 = list1.columns.create(list_id: list1.id, title: "To Buy", column_type: "to_buy")
list1column2 = list1.columns.create(list_id: list1.id, title: "Bought", column_type: "bought")
list1column3 = list1.columns.create(list_id: list1.id, title: "Expired", column_type: "expired")
list1column4 = list1.columns.create(list_id: list1.id, title: "Used", column_type: "used")
list2 = guest.owned_lists.create({user_id: 1, title: "Lunch Meal Prep List"})
list2column1 = list2.columns.create(list_id: list2.id, title: "To Buy", column_type: "to_buy")
list2column2 = list2.columns.create(list_id: list2.id, title: "Bought", column_type: "bought")
list2column3 = list2.columns.create(list_id: list2.id, title: "Expired", column_type: "expired")
list2column4 = list2.columns.create(list_id: list2.id, title: "Used", column_type: "used")
list3 = guest.owned_lists.create({user_id: 1, title: "Dinner Grocery list"})
list3column1 = list3.columns.create(list_id: list3.id, title: "To Buy", column_type: "to_buy")
list3column2 = list3.columns.create(list_id: list3.id, title: "Bought", column_type: "bought")
list3column3 = list3.columns.create(list_id: list3.id, title: "Expired", column_type: "expired")
list3column4 = list3.columns.create(list_id: list3.id, title: "Used", column_type: "used")
list4 = guest.owned_lists.create({user_id: 1, title: "Snack List"})
list4column1 = list4.columns.create(list_id: list4.id, title: "To Buy", column_type: "to_buy")
list4column2 = list4.columns.create(list_id: list4.id, title: "Bought", column_type: "bought")
list4column3 = list4.columns.create(list_id: list4.id, title: "Expired", column_type: "expired")
list4column4 = list4.columns.create(list_id: list4.id, title: "Used", column_type: "used")


list1column1.gitems.create(title: 'cereal', ord: 1)
list1column1.gitems.create(title: 'oatmeal', ord: 2)
list1column1.gitems.create(title: 'grapefruit', ord: 3)

list1column2.gitems.create(title: 'flour', ord: 1, expire_date: DateTime.new(2017,month,day))
list1column2.gitems.create(title: 'oranges', ord: 2, expire_date: DateTime.new(2017,month,day))
list1column2.gitems.create(title: 'apples', ord: 3, expire_date: DateTime.new(2017,month,day))
list1column2.gitems.create(title: 'milk', ord: 4, expire_date: DateTime.new(2017,month,day))

list1column3.gitems.create(title: 'banana-strawberry smoothie', ord: 1)
list1column3.gitems.create(title: 'avocados', ord: 2)

list1column4.gitems.create(title: 'bananas', ord: 1)
list1column4.gitems.create(title: 'yogurt', ord: 2)
list1column4.gitems.create(title: 'bacon', ord: 3)

list2column1.gitems.create(title: 'quinoa', ord: 1)
list2column1.gitems.create(title: 'celery', ord: 2)
list2column1.gitems.create(title: 'carrots', ord: 3)
list2column1.gitems.create(title: 'peanut butter', ord: 4)

list2column2.gitems.create(title: 'brown rice', ord: 1, expire_date: DateTime.new(2017,month,day))
list2column2.gitems.create(title: 'chicken', ord: 1, expire_date: DateTime.new(2017,month,day))
list2column2.gitems.create(title: 'cauliflower', ord: 1, expire_date: DateTime.new(2017,month,day))
list2column2.gitems.create(title: 'spinach', ord: 1, expire_date: DateTime.new(2017,month,day))
list2column2.gitems.create(title: 'brocolli', ord: 1, expire_date: DateTime.new(2017,month,day))

list2column3.gitems.create(title: 'steak', ord: 1)
list2column3.gitems.create(title: 'sweet potatoes', ord: 2)

list2column4.gitems.create(title: 'green pepper', ord: 1)
list2column4.gitems.create(title: 'yogurt', ord: 2)
list2column4.gitems.create(title: 'onion', ord: 3)

list3column1.gitems.create(title: 'risotto', ord: 1)
list3column1.gitems.create(title: 'orecchiette', ord: 2)
list3column1.gitems.create(title: 'steak', ord: 3)


list3column2.gitems.create(title: 'jasmin rice', ord: 1, expire_date: DateTime.new(2017,month,day))
list3column2.gitems.create(title: 'potatoes', ord: 2, expire_date: DateTime.new(2017,month,day))
list3column2.gitems.create(title: 'lamb', ord: 3, expire_date: DateTime.new(2017,month,day))
list3column2.gitems.create(title: 'asparagus', ord: 4, expire_date: DateTime.new(2017,month,day))
list3column2.gitems.create(title: 'prawns', ord: 5, expire_date: DateTime.new(2017,month,day))
list3column2.gitems.create(title: 'lemon', ord: 6, expire_date: DateTime.new(2017,month,day))

list4column3.gitems.create(title: 'salmon', ord: 1)
list4column3.gitems.create(title: 'clams', ord: 1)
list4column3.gitems.create(title: 'veal', ord: 1)

list3column4.gitems.create(title: 'peas', ord: 1)
list3column4.gitems.create(title: 'pork', ord: 2)
list3column4.gitems.create(title: 'linguine', ord: 3)
list3column4.gitems.create(title: 'cauliflower', ord: 4)

list2column4.gitems.create(title: 'ricotta cheese', ord: 1)
list2column4.gitems.create(title: 'tomatoes', ord: 2)
list2column4.gitems.create(title: 'cream', ord: 3)


list4column1.gitems.create(title: 'kind bars', ord: 1)
list4column1.gitems.create(title: 'bananas', ord: 2)
list4column1.gitems.create(title: 'mini carrots', ord: 3)

list4column2.gitems.create(title: 'sweet potatoes', ord: 1, expire_date: DateTime.new(2017,month,day))
list4column2.gitems.create(title: 'kale chips', ord: 2)
list4column2.gitems.create(title: 'turkey', ord: 3, expire_date: DateTime.new(2017,month,day))
list4column2.gitems.create(title: 'lettuce', ord: 4, expire_date: DateTime.new(2017,month,day))
list4column2.gitems.create(title: 'apples', ord: 5, expire_date: DateTime.new(2017,month,day))

list4column3.gitems.create(title: 'celery', ord: 1)
list4column3.gitems.create(title: 'strawberries', ord: 2)
list4column3.gitems.create(title: 'almonds', ord: 3)

list4column4.gitems.create(title: 'blueberries', ord: 1)
list4column4.gitems.create(title: 'avocados', ord: 2)
list4column4.gitems.create(title: 'watermelon', ord: 3)
