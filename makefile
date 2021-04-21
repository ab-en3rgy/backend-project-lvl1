install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

start:
	brain-games

lint:
	npx eslint .