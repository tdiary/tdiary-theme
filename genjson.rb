#
# genjson.rb: generate theme list as json format
#
# Copyright (C) 2014 by TADA Tadashi <t@tdtds.jp>
# You can modify / distribute under GPL
#

require 'json'

themes = {}
Dir.glob('*/README') do |readme|
	theme, = readme.split(/\//)
	attrs = {}
	open(readme, &:read).split(/\n\n/m)[0].each_line do |l|
		key, val = l.chomp.split(/:\s*/, 2)
		attrs[key.downcase] = val
	end
	themes[theme] = attrs
end
print(JSON.pretty_generate({}.tap{|h| h['themes'] = themes}))
