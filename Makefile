pull:
	rsync -rvtz --delete welchfamilyweb.com:~/public_html/natwelch.com/* .

fake-pull:
	rsync -nrvtz welchfamilyweb.com:~/public_html/natwelch.com/* .

deploy: 
	rsync -arvtz --delete * welchfamilyweb.com:~/public_html/natwelch.com/

fake-deploy: 
	rsync -anrvtz * welchfamilyweb.com:~/public_html/natwelch.com/
