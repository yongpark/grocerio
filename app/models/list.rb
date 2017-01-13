class List < ApplicationRecord

  belongs_to(
    :owner,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"
  )

  has_many(
    :columns,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: "Column"
  )

end
