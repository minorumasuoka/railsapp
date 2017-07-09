class Movie < ApplicationRecord
    validates :title,
        length: { maximum: 50 }, 
        presence: true
    validates :description, 
        length: { maximum: 500 }
    validates :year,
        length: { is: 4 }
    mount_uploader :image_path, ImageUploader
end
