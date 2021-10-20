class Api::SessionsController < ApplicationController
  def create
    #find user by credentials
    #if user is nil, render :new view
    #else, login render api/users/show
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password]
    )
    if @user.nil?
      render json: ["Invalid username/password combination"], status: 401
    else
      login(@user)
      render "api/users/show"
    end
  end

  def destroy
    #logout
    #render empty {} upon successful logout
    #render a 404 message if no current_user to logout
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
