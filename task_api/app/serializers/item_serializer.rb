class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  has_one :task, embed: :ids, include: true
  has_many :comments, embed: :ids, include: true
end
