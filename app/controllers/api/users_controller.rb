class Api::UsersController < ApplicationController
   
    def index 
@passengers = User.all

render json: {
    users: @passengers
}
    end 

    
    def show 
        @passenger = User.find(params[:id])
        
        render json:  @passenger, include: [:bags]


        
    end 

    def create 
    end 

    def update
    end 

    def destroy 
    end 
end
    
