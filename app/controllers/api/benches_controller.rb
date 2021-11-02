class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    if(params[:maxSeating])
      @benches = @benches.select { |bench| bench.seating <= params[:maxSeating].to_i }
    end
    if(params[:minSeating])
      @benches = @benches.select { |bench| bench.seating >= params[:minSeating].to_i }
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
    params.require(:bench).permit(:description, :lat, :lng, :seating, :maxSeating, :minSeating)
  end
end
