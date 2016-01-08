class Comment < ActiveRecord::Base
	has_many :users
end
