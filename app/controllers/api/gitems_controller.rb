class Api::GitemsController < ApplicationController

  def index
    @gitems = GItem
    .joins(:column)
    .where("columns.list_id = ?", params[:list_id])
    render :index
  end

  def create
    @gitem = GItem.new(gitem_params)
    if @gitem.save
      render :show
    else
      render json: @gitem.errors.full_messages, status: 422
    end
  end

  def show
    @gitem = GItem.find(params[:id])
    if @gitem
      render :show
    else
      render json: ['Grocery Item not found'], status: 422
    end
  end

  def update
    @gitem = GItem.find(params[:id])
    if @gitem.update(gitem_params)
      render :show
    else
      render json: @card.errors, status: 422
    end
  end

  def destroy
    @gitem = GItem.find(params[:id])
    @gitem.destroy
    render :show
  end

  private

  def gitem_params
    params.require(:gitem)
    .permit(:title, :column_id, :expire_date, :expired, :ord)
  end

end
