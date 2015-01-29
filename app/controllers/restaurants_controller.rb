class RestaurantsController < ApplicationController

	def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def new
    @restaurant = Restaurant.new
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.user_id = current_user.id
    if @restaurant.save
      redirect_to restaurant_url(@restaurant)
    else
      flash.now[:errors] = @restaurant.errors.full_messages
      render :new
    end
  end

  def edit
    @restaurant = Restaurant.find(params[:id])
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    if @restaurant.update_attributes(restaurant_params)
      redirect_to restaurant_url(@restaurant)
    else
      flash.now[:errors] = @restaurant.errors.full_messages
      render :edit
    end
  end

  def destroy
    restaurant = Restaurant.find(params[:id])
    restaurant.destroy
    redirect_to restaurants_url
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:title, :comment, :score)
  end

end
