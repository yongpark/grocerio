class Api::GItemsController < ApplicationController

  def create
    @gitem = current_user.owned_gitems.new(gitem_params)
    if

end
