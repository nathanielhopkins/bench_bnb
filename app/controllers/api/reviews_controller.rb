class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.find_by(benchId: params[:benchId])

    render :index
  end

  def create
    @review = Review.new(review_params)
    
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  private
  def review_params
    params.require(:review).permit(:rating, :comment, :benchId)
  end
end
