# == Schema Information
#
# Table name: g_items
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  column_id   :integer          not null
#  expire_date :date
#  expired     :boolean          default("false"), not null
#  ord         :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class GItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
