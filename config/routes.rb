Rails.application.routes.draw do
  namespace :api do 
    resources :users  do 
      resources :bags do
        resources :flights 
        end 
    end
  end 
end 

