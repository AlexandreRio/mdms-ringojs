FROM maxleiko/ringojs:0.10
RUN ringo-admin install ringo/stick
RUN mkdir -p /opt/mdms
COPY . /opt/mdms
EXPOSE 8080
ENTRYPOINT ["sh", "/opt/mdms/start.sh"]
