class Bench < ApplicationRecord
  validates :description, :lat, :lng, :seating, presence: true

  def self.in_bounds(bounds)
    # Filters all benches and returns those within passed bounds
    filtered = Bench.all.select do |bench| 
      (bench[:lat].between?(bounds['southWest']['lat'].to_f, bounds['northEast']['lat'].to_f)) and (bench[:lng].between?(bounds['southWest']['lng'].to_f, bounds['northEast']['lng'].to_f))
    end
    
    return filtered
  end
end