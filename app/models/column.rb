class Column < ApplicationRecord
  validates :title, :list, presence: true

  belongs_to(
    :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: "List"
  )

  has_many(
    :gitems,
    primary_key: :id,
    foreign_key: :column_id,
    class_name: "Gitem"
  )
end
