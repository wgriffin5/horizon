class CreateRevenues < ActiveRecord::Migration
  def change
    create_table :revenues do |t|
      t.string :name
      t.integer :gdp
      t.integer :tax_take
      t.integer :growth_rate

      t.timestamps null: false
    end
  end
end
