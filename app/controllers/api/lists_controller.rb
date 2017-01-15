class Api::ListsController < ApplicationController

  before_action :require_logged_in, only: [:create, :index]
  before_action :require_owner, only: [:update, :destroy]


  def create
    @list = current_user.owned_lists.new(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors, status: 422
    end
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render :show
    else
      render json: @list.errors, status: 422
    end
  end

  def index
    @lists = current_user.owned_lists
    render :index
  end

  def show
    @list = List.find(params[:id])
    render :show
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render :show
  end

  private
  def list_params
    params.require(:list).permit(:title, :user_id)
  end

  def require_owner
    require_list_creator(params[:id])
  end

end
