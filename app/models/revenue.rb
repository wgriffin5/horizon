class Revenue < ActiveRecord::Base


  def calculate
    self.gdp = gdp
    self.tax_take = tax_take
    self.growth_rate = growth_rate
    value = gdp * tax_take * growth_rate
    return value 
  end
end
