class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    if(params[:max_seating])
      @benches = @benches.select { |bench| bench.seating < params[:max_seating] }
    end
    if(params[:min_seating])
      @benches = @benches.select { |bench| bench.seating > params[:min_seating] }
    end

    render :index
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 401
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating, :max_seating, :min_seating)
  end
end
