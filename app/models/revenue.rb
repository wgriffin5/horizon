class Revenue < ActiveRecord::Base


  def calculate
    self.gdp = gdp
    self.tax_take = tax_take
    self.growth_rate = growth_rate
    value = gdp * tax_take * growth_rate
    return value 
  end
end


# ajax request from calculate button >>>>> controller save it 
# >>>>>   
#   in controller
#     respond_to |format|
#       format.js {  @revenue.calculate  }   in def create 
#     end
# >>>>>>
#   in js.erb
#     use the value that you pass through to draw a circle.