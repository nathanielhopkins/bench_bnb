Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy ]
    resources :benches, only: [:index, :create, :show] do
      resources :reviews, only: [:index, :create]
    end
  end
end
