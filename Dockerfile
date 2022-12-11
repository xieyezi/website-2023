
# 指定nginx配置项目
FROM nginx
COPY --from=builder . /usr/share/nginx/html/
COPY --from=builder nginx.conf /etc/nginx/nginx.conf


#暴露容器80端口
EXPOSE 80