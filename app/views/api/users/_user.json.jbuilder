json.extract! user, :id, :username

json.owned_lists user.owned_lists, partial: "api/lists/list.json.jbuilder"
