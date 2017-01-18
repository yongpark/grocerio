# == Schema Information
#
# Table name: g_items
#
#  id          :integer          not null, primary key
#  title       :integer          not null
#  column_id   :integer          not null
#  expire_date :date
#  expired     :boolean          default("false"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class GItem < ApplicationRecord
  validates :title, :column, :expired, presence: true

  belongs_to(
    :column,
    primary_key: :id,
    foreign_key: :column_id,
    class_name: "Column"
  )

  belongs_to :owner,
  class_name: "User"

  has_one(
    :list,
    through: :column,
    source: :list,
  )
end
