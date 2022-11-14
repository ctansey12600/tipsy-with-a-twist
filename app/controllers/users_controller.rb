class UsersController < ApplicationController
  wrap_parameters format: []
  skip_before_action :authorized, only: [:create]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :first_name, :last_name, :password, :password_confirmation)
  end

end
