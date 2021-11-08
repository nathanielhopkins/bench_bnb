class Review < ApplicationRecord
  validates :rating, :comment, :author, presence: true

  belongs_to(
    :bench,
    class_name: 'Bench',
    foreign_key: :benchId,
    primary_key: :id
  )
end
