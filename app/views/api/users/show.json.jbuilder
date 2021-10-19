json.set! @user.id do
  json.partial! partial: 'api/users/user' user: @user
end