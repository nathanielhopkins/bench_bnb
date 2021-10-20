class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  protect_from_forgery unless: -> { request.format.json? }

  helper_method :current_user, :logged_in?

  private
  
  def current_user
    #checks if User exists whose session_token matches session[:session_token], else returns nil
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    #checks if there is a current_user, returns boolean
    !!current_user
  end

  def login(user)
    #creats new session_token for user and assigns that to session[:session_token]; also assigns @current_user to given user
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    #resets current_user's session token; sets both session[:session_token] and @current_user to nil
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    #if no current_user exists, returns error response
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end
end
