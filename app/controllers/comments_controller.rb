class CommentsController < ApplicationController
	before_action :authenticate_user!

	def create
		@post = Post.find(params[:post_id])
		@comment = @post.comments.create(comment_params)
		@comment = current_user.name
		redirect_to post_path(@post)
	end
   
    def comment_params
        params.require(:comment).permit(:comment, :commenter)
    end

end
