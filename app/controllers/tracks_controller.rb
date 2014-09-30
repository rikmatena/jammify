class TracksController < ApplicationController

  def create
    puts params

    @track = Track.new(track_params)

    if @track.save
      flash[:notice] = "You've successfully saved a track."

      @tracks = Track.all

      respond_to do |format|
        format.html { redirect_to @redirect_path }
        format.js { render layout: false }
      end

    else
      redirect_to root_path
    end

    # respond_to do |format|
    #   format.html { redirect_to @redirect_path }
    #   format.js { render layout: false }
    # end

  end

private

  def track_params
    params.require(:track).permit(
      :name,
      :uri
    )
  end

end
