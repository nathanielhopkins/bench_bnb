# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#Bench seeds

b1 = Bench.create!(lat: 37.772699, lng: -122.464355, description: 'Beautiful green stretch bench in Golden Gate Park')
b2 = Bench.create!(lat: 37.759114, lng: -122.422802, description: 'Modest bench among a row of benches; courtside view of tennis at Mission Playground')
b3 = Bench.create!(lat: 37.784809691653955, lng: -122.40222970016015, description: 'Backless two-seater circling Yerba Buena Gardens') 