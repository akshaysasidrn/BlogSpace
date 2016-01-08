class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "200x200>" }, default_url: "http://khppu.com/assets/default_user_profile_image-1f3ca6988868150bb6f165251fb331b9.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

end
