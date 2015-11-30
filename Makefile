all: test

test:
	./node_modules/.bin/mocha -r should

benchmark bench:
	./node_modules/.bin/matcha benchmark.js

publish:
	browserify index.js -o ischinese.js -s ischinese && npm publish && git push

.PHONY: all test benchmark bench publish