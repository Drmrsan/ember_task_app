class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :items, embed: :ids, include: true
end
