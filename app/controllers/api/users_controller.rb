class Api::UsersController < ApplicationController
	def create
		# debugger
		@user = User.new(user_params)
		if @user.save
			login!(@user)
			render "api/users/show"
		else
			render json: @user.errors.messages, status: 422
		end
	end

	def update
		@user = User.find(params[:id])
		if @user.update(user_params)
			render :show
		else
			render json: ['User not found'], status: 404
		end
	end


	def show
		@user = User.find_by(username: params[:username])
		if @user
			render :show
		else
			render json: ['User not found'], status: 404
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

end
