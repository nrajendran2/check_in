class User < ApplicationRecord
    has_many :bags, :dependent => :destroy
end

