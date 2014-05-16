# Takes an array of Foursquare Lists and generates a geojson file for each.

require 'rubygems' unless defined?(Gem)
require 'bundler/setup'
Bundler.require(:default)

# Needed so we can output geojson
require 'geo_ruby/geojson'

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

# These IDs are Foursquare LIST_IDs. You can get a list of your lists
# and ids at https://developer.foursquare.com/docs/explore#req=users/self/lists
FOURSQUARE_LISTS = {
  :nat_london => '531c688011d27ede9fffa998',
  :baldwin_texas => '5315fc7e498ec71fc5bd7f4c'
}

# For each item in the list, get all entries, translate to geojson and write
# out to key.json.
FOURSQUARE_LISTS.each_pair do |filename, list_id|
  foursq = Foursquare2::Client.new(
    :api_version => '20140405',
    :client_id => 'OZIOM5KOFU4VKXI1G45JK15H4JAEKL0AGW3OBMWXCIGL2O0Z',
    :client_secret => 'E5JK41TYFPG2YMPHG30WMMR0M3R4NMTPWEOSHOPVQONMED3E',
  )

  list_data = foursq.list(list_id)
  L.info("Began parsing #{list_data.canonicalUrl}")

  # Begin going through the list.
  simplified_data = {}
  list_data.listItems.items.each do |place|
    L.debug("#{place.venue.name.inspect}: #{place.venue.location.to_hash}")
    # NOTE: We don't use from_latlong becuase that expects formats like 22`34
    # 23.45N while we get stuff like 51.5168466460692 from 4sq.
    simplified_data[place.venue.name] = GeoRuby::SimpleFeatures::Point.from_lon_lat(place.venue.location.lng, place.venue.location.lat)
  end

  # Now we make the hash look like geojson.
  feature_data = simplified_data.to_a.map do |name, geometry|
    {
      type: "Feature",
      geometry: geometry,
      properties: { name: name },
    }
  end

  # And now we construct a list of geojson "features"
  output_hash = {
    type: "FeatureCollection",
    features: feature_data
  }

  # And now WE WRITE THAT MOTHER FUCKER TO DISK BECAUSE WE ARE BINARY GODS.
  filename = "#{filename}.geojson"
  L.info("Writing #{list_data.canonicalUrl} to #{filename}")
  File.open(filename, 'w') { |file| file.write(output_hash.to_json) }
end
