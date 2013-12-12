class PagesController < ApplicationController
  def home
  	render :text => "Hello World"
  end

  def about
  	render :text => "About Page"
  end
end
