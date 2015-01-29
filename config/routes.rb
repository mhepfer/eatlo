Eatlo::Application.routes.draw do
	
	root to: 'root#root'
  resources :restaurants
  resources :reviews
end
