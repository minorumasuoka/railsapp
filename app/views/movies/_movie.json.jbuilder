json.extract! movie, :id, :title, :description, :year, :image_path, :created_at, :updated_at
json.url movie_url(movie, format: :json)
