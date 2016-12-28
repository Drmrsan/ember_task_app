Rails.application.routes.draw do
  namespace :api do
  	namespace :v1 do
  		resources :tasks do
  			resources :items do
  				resources :comments
  			end
  		end
  	end
  end
  mount_ember_app :task_front, to:"/"
end
