class Api::BagsController < ApplicationController
    

    def index 
        @bags = User.find(params[:user_id]).bags.order(id: :desc)
        render json: @bags
       
            end 
        
            
            def show
                
                @bag_name = User.find(params[:user_id]).name
        render json: {
           
            bag_name: @bag_name
        }
   
            end 
        
            def create 
                @user = User.find(params[:user_id])
                @bag = @user.bags.create(bag_params)

                render json: {
                    bag: @bag
                }
            end 
        
            def update
                
            end 
        
            def destroy 
            end 

            def def_post
                @post = Post.find(params[:id])
          end
        
        
          def bag_params
            params.require(:bag).permit(:name, :weight, :fragile, :bag_id)
          end
        end
            
        

