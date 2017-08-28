Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



  root 'welcome#index'
  get '/demos/clientside', to: 'demos#clientside'
  get '/demos/serverside', to: 'demos#serverside'
   get '/demos/adviewer', to: 'demos#adviewer'

end
