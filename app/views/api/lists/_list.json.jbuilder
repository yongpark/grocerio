json.extract! list, :id, :user_id, :title

json.owner do
  json.extract! list.owner, :username
end

# json.columns do
#   json.array!(list.columns.sort_by {|column| columnorder}) do |column|
#     json.partial! "api/columns/column.json.jbuilder", column: column
#   end
# end
