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

  	def edit
    	@post = Post.find(params[:post_id])
    	@comment = @post.comments.find(params[:id])
  	end
  	
  	def show
  		redirect_to post_path, id: params[:post_id]
	end

  	def update
    	@post = Post.find(params[:post_id])
    	@comment = @post.comments.find(params[:id])

    	if @comment.update(comments_params)
    	  redirect_to post_path(@post)
    	else
     	 render 'edit'
    	end
 	end
  
  	def destroy
    	@post = Post.find(params[:post_id])
    	@comment = @post.comments.find(params[:id])
    	@comment.destroy
       	respond_to do |format|
     	 format.html { redirect_to "/posts/#{params[:post_id]}", notice: 'Comment was successfully destroyed.' }
      	format.json { head :no_content }
    	end
  	end 

  	def comments_params
    	  params.require(:comment).permit(:comment)
  	end
 
end
