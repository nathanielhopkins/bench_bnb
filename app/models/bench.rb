class Bench < ApplicationRecord
  validates :description, :lat, :lng, :seating, presence: true
  # validate :photo_attached

  def photo_attached
    unless self.photo.attached?
      errors[:photo] << 'must be attached'
    end
  end

  def self.in_bounds(bounds)
    # Filters all benches and returns those within passed bounds
    filtered = Bench.all.select do |bench| 
      (bench[:lat].between?(bounds['southWest']['lat'].to_f, bounds['northEast']['lat'].to_f)) and (bench[:lng].between?(bounds['southWest']['lng'].to_f, bounds['northEast']['lng'].to_f))
    end
    
    return filtered
  end

  def avg_rating
    if(self.reviews.length > 0)
      sumRating = 0
      self.reviews.each {|review| sumRating += review.rating }
      avgRating = sumRating.to_f / self.reviews.length
      return sprintf "%.1f", avgRating
    else
      return "N/A"
    end
  end

  has_many(
    :reviews,
    class_name: "Review",
    foreign_key: :benchId,
    primary_key: :id
  )

  has_one_attached :photo
end