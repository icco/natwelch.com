all: local

.PHONY: update
update:
	git submodule init
	git submodule update

.PHONY: local
local: update
	python -m SimpleHTTPServer
