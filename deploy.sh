#!/bin/bash

PROFILE=private
BUCKET=bijutune

rm -rf dist
yarn build
cd dist
aws --profile $PROFILE s3 sync . s3://$BUCKET

