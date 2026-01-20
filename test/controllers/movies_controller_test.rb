require "test_helper"

class MoviesControllerTest < ActionDispatch::IntegrationTest
test "index" do
  get "/movies.json"
  assert_response 200

  data = JSON.parse(response.body)
  assert_equal Movie.count, data.length
end
end
