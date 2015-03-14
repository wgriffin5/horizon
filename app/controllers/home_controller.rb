class HomeController < ApplicationController
  
  def index
    @newrevenue = Revenue.new
  end 
  
  
end
