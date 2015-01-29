class Restaurant
  include MongoMapper::Document

  key :name, String, :required => true
  key :description, String
  key :location, String

  many :reviews
end
