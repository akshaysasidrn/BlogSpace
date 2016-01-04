class CommentsController < ApplicationController
	before_action :authenticate_user!

	def create
		@post = Post.find(params[:post_id])
		#@user = User.find(params[current_user.id])
		#@post.comment.user_id = current_user.id
		@post.comments.create comment: params[:comment][:comment]
		redirect_to post_path(@post)
	end

end
