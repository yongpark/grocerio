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

class GItem < ApplicationRecord


  belongs_to(
    :column,
    primary_key: :id,
    foreign_key: :column_id,
    class_name: "Column"
  )

  has_one(
    :owner,
    through: :list,
    source: :owner
  )

  has_one(
    :list,
    through: :column,
    source: :list,
  )

  before_validation :ensure_ord
  after_validation :handle_ord_change

  def self.update_other_ords(column_id, old_ord, new_ord)
    unless old_ord = new_ord
      if old_ord > new_ord
        where = "column_id = ? AND ord < ? AND ord >=?"
        update = "ord = ord +1"
      elsif old_ord < new_ord
        where_clause = "column_id = ? AND ord > ? AND ord <= ?"
        update = "ord = ord -1"
      end

    GItem.where(where, column_id, old_ord, new_ord)
      .update_all(update)
    end
  end

  def self.max_ord(column_id)
      GItem.where(column_id: column_id).maximum(:ord)
  end

  def self.next_ord(column_id)
    max_ord = GItem.max_ord(column_id)
    max_ord ? max_ord + 1 : 0
  end

  def max_ord
    GItem.max_ord(self.column_id)
  end

  def next_ord
    GItem.next_ord(self.column_id)
  end

  def destroy
    GItem.update_other_ords(self.column_id, self.ord, self.max_ord)
    super
  end

  private

  def ensure_ord
    unless self.ord
      self.ord = next_ord
    end
  end
  
  def handle_ord_change
    unless self.changed_attributes["column_id"]
      if self.changed.include?("ord")
        if self.changed_attributes["ord"]
          old_ord = self.changed_attributes["ord"]
        else
          old_ord = GItem.next_ord(self.column_id)
        end
        new_ord = self.ord
        GItem.update_other_ords(self.column_id, old_ord, new_ord)
      end
    end
  end
end
