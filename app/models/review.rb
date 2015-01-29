class Review
  include MongoMapper::Document

  key :title, String, :required => true
  key :comment, String
  key :score, Integer, :required => true

end
