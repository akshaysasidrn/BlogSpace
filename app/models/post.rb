class Post < ActiveRecord::Base
	has_many :comments
	belongs_to :users

	validates :title, presence: true
	validates :body, presence: true
end
