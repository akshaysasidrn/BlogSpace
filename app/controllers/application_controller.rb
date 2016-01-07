class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_filter :configure_permitted_parameters, if: :devise_controller?
  protect_from_forgery with: :exception
  def after_sign_in_path_for(resource)
  	'/posts'
  end
private
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:username, :email) }
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:name, :avatar, :email, :password, :password_confirmation) }
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:name,:avatar, :email,:password, :password_confirmation, :current_password) }
  end
end
