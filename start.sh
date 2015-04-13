#!/bin/bash
echo "Add some fake data to redis DB..." && \
  ringo /opt/mdms/tools/fakedb.js && \
  echo "Starting MdMS - Diversify..." && \
  ringo /opt/mdms/main.js
