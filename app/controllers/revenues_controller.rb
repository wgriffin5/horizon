class RevenuesController < ApplicationController

def index 
  # revenue is the object (scenario of inputed user values) 
  @revenues = Revenue.all 
end 

def new
  @revenue = Revenue.new
end

def create
  @revenue = Revenue.create hospital_params
  redirect_to
end

def show 
  @revenue = Revenue.find params[:id]
end

def edit 
  @revenue = Revenue.find params[:id]
end

def update 
  @revenue = Revenue.find params[:id]
  @revenue.update_attributes revenue_params
  redirect_to revenue_path(@revenue)
end

def destroy
  @revenue = Revenue.find params[:id]
  @revenue.delete
  redirect_to revenues_path
end

private 

def revenue_params
  params.require(:revenue).permit(
    :name,
    :gdp,
    :tax_take
    :growth_rate
  )
  

end








