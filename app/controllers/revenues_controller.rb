class RevenuesController < ApplicationController

def index 
  # revenue is the object (scenario of inputed user values) 
  @revenues = Revenue.all 
  @newrevenue = Revenue.new
end 

def new
  @revenue = Revenue.new
end

def create
  @revenue = Revenue.create revenue_params
  redirect_to root_path
    respond_to do |format|
      format.js { render :json { @revenue.calculate}.to_json }}
    end
end

def show 
  @revenue = Revenue.find params[:id]
    # respond_to do |format|
    #   format.js { render :json { {@revenue.calculate}.to_json}
    # end
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

 


end


private 

def revenue_params
  params.require(:revenue).permit(
    :name,
    :gdp,
    :tax_take,
    :growth_rate
  )
  

end








