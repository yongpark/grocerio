Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :lists, except: [:new, :edit] do
        resources :columns, only: [:index]
        resources :gitems, only: [:index]
    end
    resources :columns, except: [:new, :edit, :index, :update]
    resources :gitems, except: [:new, :edit, :index]
  end
  root "static_pages#root"
end
