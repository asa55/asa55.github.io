# Networking and the Internet

## [Check out MIT 6.033](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/index.htm) for all this and more on networks!

### Network Basics

A *system* is a set of interconnected components that has an expected behavior observed at the interface with its environment.

Complexity limits what we can build and causes a number of unforeseen issues, but these challenges can be mitigated with design principles such as modularity and abstraction.

One way to enforce modularity is to use the [*client/server model*](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview).

In a client/server model, the client's browser sends a GET request to get resources (HTML code, images, etc.) from a remote URL. The server sends a POST reply with the requested resources (if possible and allowable). This is done through the use of [stub clients and Remote Procedure Calls (RPCs)](https://en.wikipedia.org/wiki/Stub_(distributed_computing)) - where the *stub* is the piece of code that converts parameters passed between client and server during an RPC.

The challenges we face with RPCs stem from the fact that they act over a network, and you can't count on communications not to drop out at the worst possible time. We can have servers store state information to *replay* results, preventing multiple requests from a user from repeating completed actions (for example user clicks "buy" on an item multiple times because the "success" page isn't loading like they expect) but the servers could still fail.
We want things like:
* Scalability
* Fault-tolerance and reliability
* Security

What is a network?
* *End points* talk to other end points via *links*
* Links connect end points via *switches*
* *Nodes* are end points or switches
* Nodes are assigned unique names (or addresses - names imbued with location information) to nodes
* In *routing* each node learns a minimum-cost route to every other reachable node
* *Transport* is the process associated with sharing the network efficiently and fairly

### Naming in Systems and Domain Name Systems (DNS)

*Naming* is what allows modules (e.g. a client and a server) to communicate. It is pervasive across systems.
*DNS* maps hostnames to IP addresses, and is a good example of *hierarchy*.
* *Names* are the set of all possible names (e.g. hostnames github.io)
* *Values* are the set of all possible values (e.g. IP addresses 176.9.22.128)
* *Look-up algorithms* *resolve* a hostname to an IP address so that your machine knows where to send data.
   * There are only 13 root server IP addresses on the entirety of the internet today (to the best of my knowledge)
   * If you want to find asa55.github.io:
      * Your browser sends a recursive call to root, root table returns the IP address for the "io" table (which it knows because there are a finite number of extensions, like .com, .edu, etc.)
      * "io" table returns the IP address for the "github" table (which it knows because GitHub "registered" to own the domain name when it bought it)
      * "github" table returns the IP address for "asa55" page (which it knows because GitHub lets me use this domain name)

## Routing

The goal of a routing protocol is to allow each switch to know, for every destination in the network, a minimum-cost route to the destination.

The following two methods are conceptually simple but don't scale well to the size of the internet:
* *Link-state routing* works by disseminating full topology information to all nodes. It is robust against failures, but the overhead of flooding (i.e. sending advertisements (i.e. a list of neighboring nodes and the link costs to those nodes) to every other node) limits its ability to scale.
* *Distance-vector routing* works by disseminating information about the cost of the routes. This has less overhead, but its poor failure handling limits its scale.

For scalable routing, we look to:
* *Path-vector routing*: advertisements include the path
* *Hierarchy of routing*: route between Autonomous Systems (AS) then within AS
* *Topological addressing*: assign addresses to contiguous blocks to make advertisements smaller
* *Border Gateway Protocol (BGP)* provides a means for AS to do *policy routing*. It works on the internet today, though scale is becoming a concern even for this as the internet continues to grow

What we want:
* We want to *route* (and address) scalably while dealing with issues of policy and economy. We can do this through *BGP*.

* We want to transport data scalably while dealing with various application demands. We can do this through *TCP*.
   * TCP provides reliable transport along with congestion control.
   * TCP has been a massive success, but senders don't react to congestion until queues are already full. There are better ways to handle this via *in-network resource management*
      * To handle these issues, we use *queue management* techniques such as:
         * *Droptail*, which drops packets when queue is full
         * *RED (drops) / ECN (marks)*, which drops packets before the queue is full
      * *Traffic differentiation* schemes require a scheduling discipline (a.k.a. *load balancers*)
         * We can also used *delay-based scheduling* if we want to give latency guarantees to certain types of traffic
            * *Priority queueing*, which puts latency-sensitive traffic first
         * We can also use *bandwidth-based scheduling* to allocate a specific amount of network bandwidth to some traffic
            * *Round-robin* (or weighted round-robin or defecit round-robin)

## Firewalls

## Search

## More

In theory, client-server model is less scalable than a Content Delivery Network (CDN) model, is less scalable than a Peer-to-Peer (P2P) network model. CDNs don't scale the same way that P2P networks do but provide features that P2P networks can't. P2P networks are infinitely scalable in theory, but incentivizing peers to cooperate well is a challenge.
