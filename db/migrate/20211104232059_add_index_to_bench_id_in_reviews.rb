class AddIndexToBenchIdInReviews < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :benchId
  end
end
