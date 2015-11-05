#!/bin/bash

#####
# Helper script for pretty formatting of json files
#####

for file in `ls -a app/chapters | grep -v \\\.\$`; do
  cat app/chapters/$file | python -mjson.tool > tmp.json
  rm app/chapters/$file
  mv tmp.json app/chapters/$file
done
