class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :item_id
  has_one :item, embed: :ids, include: true
end
