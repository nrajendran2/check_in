class CreateBags < ActiveRecord::Migration[5.1]
  def change
    create_table :bags do |t|
      t.string :name
      t.integer :weight
      t.boolean :fragile

      t.timestamps
    end
  end
end
