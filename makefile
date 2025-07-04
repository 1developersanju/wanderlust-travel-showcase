build:
	npm run build
deploy:
	rm -rf /var/www/leetravels
	mkdir -p /var/www/leetravels
	cp -r dist/* /var/www/leetravels
