# Computer Security

## [Check out MIT 6.033](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/index.htm) for all this and more!

## Security Basics

To build more secure systems:
1. *Policy:* be clear about goals
2. *Threat Model:* be clear about assumptions

Think about a client trying to access a server:
* A *principal* is what identifies the client on a server
   * *Authentication* verifies that the principal is who they claim to be
   * *Authorization* verifies that the principal has access to perform their request
* *Complete mediation* is where every request for a resource goes through a *guard*
   * The guard model can suffer from *adversarial attacks* like SQL injection
   * Even though things can still go wrong, systems that use this model avoid common pitfalls
   * A guard typically provides authentication and authorization
      * Problems with guards:
         * An adversary with access to the server can get passwords
            * If we try to mitigate this with hashes, hashes are still fast to compute so an adversary could quickly create a *rainbow table*
               * If we try to mitigate this with a slow hash, adversaries could still create rainbow tables for the most common passwords
                  * If we mitigate this by adding *salt*, an adversary would need a separate rainbow table for every possible salt
* We want to avoid transmitting the same password over and over. Once the client has been authenticated, the server will send it a *session cookie*, which it can use to keep authenticating itself for a period of time
   * Problems with cookies:
      * Adversaries could easily create their own cookies
         * If we try to mitigate by including a hash inside the cookie, adversaries could still easily create their own cookies
            * If we try to mitigate by including a server key in the cookie, adversaries could still easily create their own cookies
               * We need to hash against the server key and the username and the expiration and keep that in the cookie. That way, the adversary can't directly access the server key (unlike username and expiration, which are included separately in the cookie outside of the hash result)
* We want to prevent against phishing attacks, where adversaries trick users into revealing their passwords
   * We need to avoid sending passwords to the server entirely, but still allow valid servers to authenticate users
   * Using a *challenge-response protocol*, a password is never sent directly (but a hash of the password and a random number is, making the password non-recoverable)
* *Bootstrapping*, or the process of initially setting or resetting a password is tricky
* There may be better alternatives to passwords, but there are always trade-offs. Modifications that add security may also increase complexity and decrease usability.
* *Secure channels:*
   * *Confidentiality (or secrecy)* is what you have when an adversary can't learn the contents of your message
   * *Integrity* is what you have when an adversary can't tamper with message contents (but if they do, the client and/or server will detect it)
   * Given a key and a message, an encryption function will generate *ciphertext*
      * Given the ciphertext, it is (virtually) impossible to obtain the message without knowing the key
      * Encrypting with *symmetric keys* provides secrecy, and using a Message Authentication Code (MAC) provides integrity
         * *Diffie-Hellman key exchange* lets us exchange the symmetric key securely
   * To verify identities, we use *public-key cryptography* and cryptographic *signatures*. We often distribute public keys with *certificate authorities*, though this method is not perfect

When an attacker's goal is to prevent legitimate access to an internet resource, they might use:
* *Distributed Denial of Service attacks* to congest the service enough to make it unavailable
   * *Botnets* are large collections of compromised machines controlled by an attacker. These make DDoS attacks much easier and very practical to mount
      * *Cross-site scripting (XSS)*: if this script is executed on a victim's machine, the attacker will get the victim's cookie - this plays into setting up a botnet
      * *Network Intrusion Detection Systems (NIDS)* attempt to detect network attacks so that users can then prevent them (detection being the first step towards prevention)
         * There are challenges with this, not to mention some DDoS attacks mimic legitimate traffic, not to mention DDoS traffic doesn't even come from attacker-owned machines
            * DDoS attacks are particularly difficult to prevent because they are difficult to detect
            * DDoS can also mount attacks by controlling routers, and are particularly devastating when parts of the *network infrastructure* are attacked (e.g. DDoSing the DNS root zone, making fake BGP announcements)

MIT 6.033 also illustrates case studies in aspects of *anonymity* by [illustrating digital currency or BitCoin here](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/week-13/MIT6_033S18lec24.pdf) and [onion routing or Tor here](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018/week-14/MIT6_033S18lec25.pdf)

### TODO: Either make a dedicated server page or include a server config here, possibly just a LAMP stack