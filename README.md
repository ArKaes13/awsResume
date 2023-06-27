# Cloud Resume Challange

Live: https://www.montgomeryresume.click/

## Introduction
This is my attempt at the 'cloud resume challenge' using AWS. The cloud resume challenge is a project
to help build and demonstrate fundamental skills with cloud architecture. This was my first time hosting
on something other than github pages.

## Architecture
    Users ----> www.montgomeryresume.click <====> Lambda <====> DynamoDB
                        |
                        |
                        |
                        V
                    Route 53 ----> CloudFront ----> S3 Bucket

## Breakdown of Steps
- Created a webpage featuring my resume using React and Webpack
- Created an S3 Bucket using AWS and deployed my code to it
- Used Route 53 to make a custom domain name
- Used CloudFront to enable HTTPS
- Created a table in DynamoDB in order to keep track of page visits
- Wrote an API in Python using AWS Lambda that communicates with DynamoDB through my domain and updates and returns page visits
- Wrote JS code to retrieve and display page visits on the webpage
