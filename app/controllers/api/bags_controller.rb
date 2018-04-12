class Api::BagsController < ApplicationController
    before_action :def_post, only: [:show, :update, :destroy]

    def index 
        @bags = User.find(params[:user_id]).bags.order(id: :desc)
        render json: @bags, include: [:flight]
       
            end 
        
            
            def show
                
                @bag_name = User.find(params[:user_id])
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
                @bag.update!(bag_params)
        render json: {
            bag: @bag
        }
                
            end 
        
            def destroy 
                @bag.destroy
            end 

            def def_post
                @bag = Bag.find(params[:id])
          end
        
        
          def bag_params
            params.require(:bag).permit(:name, :weight, :fragile, :bag_id)
          end
        end
            
        

