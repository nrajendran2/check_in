class Api::FlightsController < ApplicationController

    def index 
        @flights = User.find(params[:user_id]).bags.find(params[:bag_id]).flight
        render json: @flights
       
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
            
        

