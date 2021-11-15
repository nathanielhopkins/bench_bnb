class Review < ApplicationRecord
  validates :rating, :comment, :author, presence: true
  validates :rating, inclusion: { in: 1..5, message: 'must be between 1 and 5'}

  belongs_to(
    :bench,
    class_name: 'Bench',
    foreign_key: :benchId,
    primary_key: :id
  )
end
