Rails.application.routes.draw do
	get "/test", to: "visitors#index"
  root to: 'visitors#index'

  resources :tracks
end
