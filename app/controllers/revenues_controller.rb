class RevenuesController < ApplicationController

  def index 
    # revenue is the object (scenario of inputed user values) 
    @revenues = Revenue.all 
  end 

   

end
