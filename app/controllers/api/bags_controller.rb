class Api::BagsController < ApplicationController
    

    def index 
        @bags = User.find(params[:user_id]).bags.order(id: :desc)
        render json: @bags
       
            end 
        
            
            def show 
               
        
    
                
            end 
        
            def create 
            end 
        
            def update
            end 
        
            def destroy 
            end 
        end
            
        

