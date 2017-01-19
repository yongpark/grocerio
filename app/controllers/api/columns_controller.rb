class Api::ColumnsController < ApplicationController

    def index
      @columns = Column.where(list_id: params[:list_id])
      render :index
    end

    def create
      @column = Column.new(column_params)
      if @column.save
        render :show
      else
        render json: @column.errors.full_messages, status: 422
      end
    end

    def destroy
      @column = Column.find(params[:id])
      if @column.destroy
        render :show
      else
        render json: @column.errors.full_messages, status: 422
      end
    end

    def update
      @column = Column.find(params[:id])
      if @column.update(column_params)
        render :show
      else
        render json: @column.errors, status: 422
      end
    end

    private
    def column_params
      params.require(:column).permit(:title, :user_id, :column_type)
    end
end
