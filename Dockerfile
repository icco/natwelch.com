FROM nginx:stable
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
EXPOSE 8080
COPY . .
RUN rm -vf Dockerfile nginx.conf
