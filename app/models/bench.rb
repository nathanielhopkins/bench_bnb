class Bench < ApplicationRecord
  validates :description, :lat, :lng, :seating, :author, presence: true

  def self.in_bounds(bounds)
    # Filters all benches and returns those within passed bounds
    filtered = Bench.all.select do |bench| 
      (bench[:lat].between?(bounds['southWest']['lat'].to_f, bounds['northEast']['lat'].to_f)) and (bench[:lng].between?(bounds['southWest']['lng'].to_f, bounds['northEast']['lng'].to_f))
    end
    
    return filtered
  end

  def rating
    if(self.reviews.length > 0)
      sumRating = 0
      self.reviews.each {|review| sumRating += review.rating }
      avgRating = sumRating / self.reviews.length
      return avgRating
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
end