@gitems.each do |gitem|
  json.set! gitem.id do
    json.partial! 'gitem', gitem: gitem
  end
end
