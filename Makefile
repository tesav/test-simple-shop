# build
build:
	docker-compose build --pull --no-cache

# up
up:
	docker-compose up -d

# up-live
up-live:
	docker-compose up

# down
down:
	docker-compose down --remove-orphans

# cli-php
cli-php:
	docker-compose exec php /bin/sh

# cli-php
cli-db:
	docker-compose exec database /bin/sh
