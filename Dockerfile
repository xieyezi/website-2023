#指定nginx配置项目
FROM nginx
COPY . /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf


#暴露容器80端口
EXPOSE 80