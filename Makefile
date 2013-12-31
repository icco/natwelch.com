all:
	git submodule init
	git submodule update

local:
	python -m SimpleHTTPServer
