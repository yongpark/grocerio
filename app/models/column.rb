# == Schema Information
#
# Table name: columns
#
#  id          :integer          not null, primary key
#  list_id     :integer          not null
#  title       :string           not null
#  column_type :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

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
    dependent: :destroy,
    class_name: "GItem"
  )
end
