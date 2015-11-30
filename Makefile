all: test

test:
	./node_modules/.bin/mocha -r should

.PHONY: all test