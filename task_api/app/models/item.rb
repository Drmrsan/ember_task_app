class Item < ApplicationRecord
  belongs_to :task
  has_many :comments, dependent: :destroy
end
