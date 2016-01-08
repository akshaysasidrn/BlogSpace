class CommentsController < ApplicationController
	before_action :authenticate_user!

	def create
		@post = Post.find(params[:post_id])
		@comment = @post.comments.create(comment_params)
		redirect_to post_path(@post)
	end
   
    def comment_params
        params.require(:comment).permit(:comment,:post_id,:user_id)
    end

end
