all: test

test:
	./node_modules/.bin/mocha -r should

benchmark bench:
	./node_modules/.bin/matcha benchmark.js

.PHONY: all test benchmark bench