# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  validates :title, :owner, presence: true

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
    dependent: :destroy,
    class_name: "Column"
  )

  has_many(
    :gitems,
    through: :columns,
    source: :gitems
  )

end
