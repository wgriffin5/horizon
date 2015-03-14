module RevenuesHelper

def calculate_pv

@pv = (@revenue.gdp * @revenue.tax_take) * (1 + @revenue.growth_rate.decimal) 

end

end
