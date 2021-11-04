class Review < ApplicationRecord
  validates :rating, :comment, presence: true

  def self.find_by_bench(benchId) 
    reviews = Review.all
    reviews.select { |review| review.benchId == benchId}
    return reviews
  end

  belongs_to(
    :bench,
    class_name: 'Bench',
    foreign_key: :benchId,
    primary_key: :id
  )
end
