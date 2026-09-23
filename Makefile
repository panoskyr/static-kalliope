.PHONY: pre-commit

pre-commit:
	npm run format
	npm run build:css
