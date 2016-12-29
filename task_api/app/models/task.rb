class Task < ApplicationRecord
	has_many :items, dependent: :destroy
end
