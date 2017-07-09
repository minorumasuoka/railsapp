Rails.application.routes.draw do
  root to: 'movies#index'
  devise_for :admins, controllers: {sessions: 'admins/sessions'}
  devise_for :users, controllers: {sessions: 'users/sessions'}
  resources :movies do
    collection do
      get 'rent_a_movie', to: 'movies#make_a_rent'
      post 'rent_a_movie', to: 'movies#finish_a_rent'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
