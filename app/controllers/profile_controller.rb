class ProfileController < ApplicationController


def index
  @posts = Post.where("user_id=#{current_user.id}")	
end

def show
  @user = User.find(params[:id])
end

end