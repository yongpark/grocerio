class CreateColumns < ActiveRecord::Migration[5.0]
  def change
    create_table :columns do |t|
      t.integer :list_id, null: false
      t.string :title, null: false
      t.string :column_type, null: false
      t.timestamps
    end
  end
end
