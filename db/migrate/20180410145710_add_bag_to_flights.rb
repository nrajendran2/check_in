class AddBagToFlights < ActiveRecord::Migration[5.1]
  def change
    add_reference :flights, :bag, foreign_key: true
  end
end
