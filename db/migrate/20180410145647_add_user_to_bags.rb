class AddUserToBags < ActiveRecord::Migration[5.1]
  def change
    add_reference :bags, :user, foreign_key: true
  end
end
