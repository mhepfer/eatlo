class ReviewsController < ApplicationController
	 
	def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      redirect_to review_url(@review)
    else
      flash.now[:errors] = @review.errors.full_messages
      render :new
    end
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      redirect_to review_url(@review)
    else
      flash.now[:errors] = @review.errors.full_messages
      render :edit
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    redirect_to reviews_url
  end

  private
  def review_params
    params.require(:review).permit(:title, :comment, :score)
  end

end
