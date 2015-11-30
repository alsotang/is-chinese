all: test

test:
	./node_modules/.bin/mocha -r should

benchmark bench:
	./node_modules/.bin/matcha benchmark.js

publish: bundle
	npm publish && git push

bundle:
	browserify index.js -o ischinese.js -s ischinese

.PHONY: all test benchmark bench publish bundle