require 'sinatra'
get '/' do
  # "Hello World"
  File.read(File.join('public', 'mockup.html'))
end
