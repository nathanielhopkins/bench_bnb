# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Bench seeds

b1 = Bench.create!(seating: 10, lat: 37.772699, lng: -122.464355, description: 'Beautiful green stretch bench in Golden Gate Park')
b2 = Bench.create!(seating: 4, lat: 37.759114, lng: -122.422802, description: 'Modest bench among a row of benches; courtside view of tennis at Mission Playground')
b3 = Bench.create!(seating: 2, lat: 37.784809691653955, lng: -122.40222970016015, description: 'Backless two-seater circling Yerba Buena Gardens') 
b4 = Bench.create!(seating: 2, lat: 37.78160139416755, lng: -122.38716945206654, description: 'Small bench overlooking South Beach')

# Attach S3 photos to Benches

b1.photo.attach(io: File.open('app/assets/images/b1.jpg'), filename: 'b1.jpg')
b2.photo.attach(io: File.open('app/assets/images/b2.jpg'), filename: 'b2.jpg')
b3.photo.attach(io: File.open('app/assets/images/b3.jpg'), filename: 'b3.jpg')
b4.photo.attach(io: File.open('app/assets/images/b4.jpg'), filename: 'b4.jpg')
# Review seeds

r1 = Review.create!(benchId: 1, rating: 5, comment: 'Great spot for a nap!', author: "Steve")
r2 = Review.create!(benchId: 2, rating: 4, comment: "Nice bench, but I'm not a tennis fan.", author: "Kim")
r3 = Review.create!(benchId: 3, rating: 5, comment: 'Love the gardens, would definitely revisit!', author: "Sean")
r4 = Review.create!(benchId: 4, rating: 3, comment: 'Okay views, but location is terrible', author: "Bill")