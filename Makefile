all: 

deploy: 
	rsync -rvtz --delete . familyweb.com:~/public_html/natwelch.com

fake-deploy: 
	rsync -nrvtz . welchfamilyweb.com:~/public_html/natwelch.com

