class Gitem < ApplicationRecord
  validates :title, :column, :expired, presence: true

  belongs_to(
    :column,
    primary_key: :id,
    foreign_key: :column_id,
    class_name: "Column"
  )
end
