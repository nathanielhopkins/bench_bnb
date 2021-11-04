class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(benchId: params[:bench_id])
    render json: @reviews
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
    params.require(:review).permit(:rating, :comment, :benchId, :author)
  end
end
