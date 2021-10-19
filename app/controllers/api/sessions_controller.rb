class Api::SessionsController < ApplicationController
  def create
    #find user by credentials
    #if user is nil, render :new view
    #else, login redirect to user_url
  end

  def destroy
    #logout
    #render empty {} upon successful logout
    #render a 404 message if no current_user to logout
  end
end
