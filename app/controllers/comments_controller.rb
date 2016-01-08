class CommentsController < ApplicationController
	before_action :authenticate_user!

	def create
		@post = Post.find(params[:post_id])
		@comment = @post.comments.new
		@comment.comment=params[:comment][:comment]
		@comment.user_id=current_user.id
		@comment.commenter=current_user.name
		@comment.save
		redirect_to post_path(@post)
	end
end
