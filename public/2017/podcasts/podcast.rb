require 'nokogiri'

doc = File.open("podcasts.html") { |f| Nokogiri::HTML(f) }

doc.css('.podcast_content').each do |pod|
  title = pod.at_css('.title').content
  puts "## [#{title}]()"
  puts ""
  puts "![#{title}](#{pod.at_css('img').attr("src")})"
  puts ""
end
