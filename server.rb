require 'sinatra'
get '/' do
  File.read(File.join('public', '/mockup.html'))
end
