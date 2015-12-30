class CommentsController < ApplicationController
	before_action :authenticate_user!
	def create
	post = Post.find(params[:post_id])
	post.comments.create comment: params[:comment][:comment]
	redirect_to post_path(post)
	end
end
