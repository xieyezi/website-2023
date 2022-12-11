
# 将容器的工作目录设置为/app(当前目录，如果/app不存在，WORKDIR会创建/app文件夹)
WORKDIR /app 
COPY . /app

#指定nginx配置项目
FROM nginx
COPY app /usr/share/nginx/html/
COPY app/nginx.conf /etc/nginx/nginx.conf


#暴露容器80端口
EXPOSE 80