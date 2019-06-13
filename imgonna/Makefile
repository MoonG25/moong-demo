# Makefile.

PROJECT = "Imgonna Project"

install: \
  ;@echo "Installing ${PROJECT}..."; \
	npm install

build: \
  ;@echo "Building ${PROJECT}..."; \
	npm run build

clean: \
  ;@rm -rf node_modules/;

deploy:	;@echo "Starting ${PROJECT}....."; \
	./mvnw spring-boot:run

.PHONY: install build clean deploy
