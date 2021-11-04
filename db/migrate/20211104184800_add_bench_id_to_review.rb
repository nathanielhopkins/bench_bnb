class AddBenchIdToReview < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :benchId, :integer, null: false
  end
end
