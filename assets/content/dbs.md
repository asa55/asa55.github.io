# Databases

When it cones to the basics of databases, Beck Williams says it all in [his post on Medium](https://medium.com/@rwilliams_bv/intro-to-databases-for-people-who-dont-know-a-whole-lot-about-them-a64ae9af712)

When it comes to relational or nonrelational databases, they're just places where you can store things. Even then, you typically don't keep heavy data sitting around in a database because [there are other sensible options](https://dba.stackexchange.com/questions/2445/should-binary-files-be-stored-in-the-database) such as including references in the database to data-intensive files that live in a separate fileserver.

The questions people really want to know when they ask you about your knowledge of databases will come down to a few aspects:
1. Do you know SQL? There are many advanced queries you can run to get the things you're looking for in relational databases.
2. SQL doesn't necessarily carry over to your nonrelational database queries, so at minimum know how to work with data in your preferred NRDB
3. The key issues surrounding databases might just be related to performance and security. Every database you stand-up has configurations that you should know how to navigate. This is highly implementation-dependent and you'd be doing yourself a favor if you know how to recommend tying your database into other services (via frontend and backend API's you define - you're probably going to be the one writing the middleware tie-ins to your database, so it's on you to know how to make it happen!)

### I am interested in demonstrating a few nontrivial queries to RDB's and NRDB's, but mainly this page is for the considerations needed for tying DB's into a practical system that scales. I'm still thinking through how I want to demo this - possibly just on my server config demo and I'll link to that from here...
