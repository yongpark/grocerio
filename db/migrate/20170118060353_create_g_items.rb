class CreateGItems < ActiveRecord::Migration[5.0]
  def change
    create_table :g_items do |t|
      t.string :title, null: false
      t.integer :column_id, null: false
      t.date :expire_date
      t.boolean :expired, null:false, default: false
      t.integer :ord, null:false
      t.timestamps
    end
    add_index :g_items, [:column_id, :ord]
  end
end
