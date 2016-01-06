class UserController < ApplicationController

def show
    @posts=Post.where("user_id=#{current_user.id}")
    @posts = Post.paginate(:page => params[:page], :per_page => 4)
 end

end
