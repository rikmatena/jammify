class VisitorsController < ApplicationController

	require 'rspotify'

	def index
		@tracks = Track.all

		# @tracks = RSpotify::Track.search('Thriller')

		# @tracks.each do |track|
		# 	# puts track.inspect
		# 	# puts track.artists.inspect
		# 	track.artists.each do |artist|
		# 		puts artist.name
		# 	end
		# 	puts "--------"
		# 	# puts "#{track.artist.name} - #{track.name}"
		# end

		# respond_to do |format|
  #     format.json {render json: @tracks }
  #   end

	end

end
