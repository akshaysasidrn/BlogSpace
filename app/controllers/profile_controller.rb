class ProfileController < ApplicationController


def index
  @posts=Post.where("user_id=#{current_user.id}")	
end

def create
  @user = User.create( user_params )
end

def edit
  @user = current_user.update_attributes(user_params)
end
private

# Use strong_parameters for attribute whitelisting
# Be sure to update your create() and update() controller methods.

def user_params
  params.require(:user).permit(:avatar)
end

end
