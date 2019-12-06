# Frontend

## Vanilla HTML / CSS / JS

## Frameworks

# Architecture

## Firewalls

## Load Balancers

## Domain Name System

Think CNAME

## Content Delivery Networks

## Static Files

## Webservers

## Fileservers

## Databases

When it comes to the basics of databases, Beck Williams says it all in [his post on Medium](https://medium.com/@rwilliams_bv/intro-to-databases-for-people-who-dont-know-a-whole-lot-about-them-a64ae9af712)

When it comes to relational or nonrelational databases, they're just places where you can store things. Even then, you typically don't keep heavy data sitting around in a database because [there are other sensible options](https://dba.stackexchange.com/questions/2445/should-binary-files-be-stored-in-the-database) such as including references in the database to data-intensive files that live in a separate fileserver.

The questions people really want to know when they ask you about your knowledge of databases will come down to a few aspects:
1. Do you know SQL? There are many advanced queries you can run to get the things you're looking for in relational databases.
2. SQL doesn't necessarily carry over to your nonrelational database queries, so at minimum know how to work with data in your preferred NRDB
3. The key issues surrounding databases might just be related to performance and security. Every database you stand-up has configurations that you should know how to navigate. This is highly implementation-dependent and you'd be doing yourself a favor if you know how to recommend tying your database into other services (via frontend and backend API's you define - you're probably going to be the one writing the middleware tie-ins to your database, so it's on you to know how to make it happen!)

### I am interested in demonstrating a few nontrivial queries to RDB's and NRDB's, but mainly this page is for the considerations needed for tying DB's into a practical system that scales. I'm still thinking through how I want to demo this - possibly just on my server config demo and I'll link to that from here...

# Serverless Computing

To visualize what this is all about, see [this classic tutorial from AWS](https://aws.amazon.com/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)

![serverless example](https://d1.awsstatic.com/Test%20Images/Kate%20Test%20Images/Serverless_Web_App_LP_assets-16.7cbed9781201a79b9efa761807c4312e68b23485.png)

[Dan on Medium reminds us](https://medium.com/better-programming/the-myths-and-misconceptions-about-serverless-7b271b8f0dda)
![It's not serverless, batman](https://miro.medium.com/max/638/0*MOlSHvVHtFsX7wtn)

## What Makes Serverless Great

* No server management with automated high availability
   * This aspect is abstracted away from developers. Why pull dev resources away from innovation to perform IT related work when you can have improved security and uptime for less?
* Flexible scaling and pay for value
   * The serverless model is pay-as-you-go. Serverless providers charge for units of consumption rather than units of individual servers

## The Serverless Manifesto

* Functions are the unit of deploying and scaling
* No machines, VMs, or containers visible in the programming model
* Permanent storage lives elsewhere
* Scales per request. Users cannot over- or under-provision capacity
* Never pay for idle (no cold servers/containers or their costs)
* Implicitly fault tolerant because functions can run anywhere
* BYOC - Bring your own code
* Metrics and logging are a universal right
