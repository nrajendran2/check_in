class Bag < ApplicationRecord
    belongs_to :user
    has_one :flight
end
