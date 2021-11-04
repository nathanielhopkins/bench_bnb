class Review < ApplicationRecord
  validates :rating, :comment, presence: true

  belongs_to :bench
end
