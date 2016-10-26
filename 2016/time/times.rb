#! /usr/bin/env ruby

require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)

start = Chronic.parse("Jan 18 2016, 15:00").in_time_zone('US/Eastern')
melissa_start = Chronic.parse("apr 28 2015, 15:00").in_time_zone('US/Eastern')
end_of_campaign = Chronic.parse("Nov 08 2016, 23:00").in_time_zone('US/Eastern')

range = start...end_of_campaign
days = (end_of_campaign - start) / (24 * 60 * 60)

puts "I will have worked #{days.to_i} days on this campaign."
