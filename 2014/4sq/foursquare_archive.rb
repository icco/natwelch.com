#! /usr/bin/env ruby
# Takes an array of Foursquare Lists and generates a geojson file for each.

require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)

# Needed so we can output geojson
require 'geo_ruby/geojson'
require 'logger'

L = Logger.new(STDOUT)
# Change level to DEBUG to get more debugging output.
L.level = Logger::INFO
L.formatter = proc do |severity, datetime, progname, msg|
  colors = {
    :DEBUG => :green,
    :INFO => :light_blue,
    :ERROR => :red,
    :WARN => :orange,
  }
  "#{datetime} (#{severity[0].colorize(colors[severity.to_sym])}): #{msg}\n"
end

cal_file = File.open("JB2YG3WJSXZH0I3WHY2CNALAXYL4YWEX.ics")

# Parser returns an array of calendars because a single file
# can have multiple calendars.
cals = Icalendar.parse(cal_file)
cal = cals.first
L.info("Began parsing #{cal.events.count} events.")

# Begin going through the data.
simplified_data = {}
cal.events.each do |event|
  # NOTE: We don't use from_latlong becuase that expects formats like 22`34
  # 23.45N while we get stuff like 51.5168466460692 from 4sq.
  simplified_data[event.location] = GeoRuby::SimpleFeatures::Point.from_lon_lat(event.geo[0], event.geo[1])
end

# Now we make the hash look like geojson.
feature_data = simplified_data.to_a.map do |name, geometry|
  {
    type: "Feature",
    geometry: geometry,
    properties: {
      name: name,
    },
  }
end

# And now we construct a list of geojson "features"
output_hash = {
  type: "FeatureCollection",
  features: feature_data
}

# And now WE WRITE THAT MOTHER FUCKER TO DISK BECAUSE WE ARE BINARY GODS.
filename = "checkins.geojson"
L.info("Writing to #{filename}")
File.open(filename, 'w') { |file| file.write(output_hash.to_json) }
