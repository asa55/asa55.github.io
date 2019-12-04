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
