FROM ghcr.io/hanzoai/spa:latest
COPY out /public
ENV PORT=3000
ENV ROOT=/public
EXPOSE 3000
