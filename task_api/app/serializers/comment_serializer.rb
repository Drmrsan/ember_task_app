class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :item, embed: :ids, include: true
end
