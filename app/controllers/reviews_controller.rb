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
    if @review.save
      render :index
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
      render :index
    else
      flash.now[:errors] = @review.errors.full_messages
      render :edit
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:title, :comment, :score)
  end

end
