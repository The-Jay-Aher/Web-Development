# Web Dev Fundamentals

## 1 - Client Server Model

It is a generic term used to describe 2 computers talking with each other and one of those computer is a client.

### Client (Frontend)

1. The Computer that is requesting the information (generic definition).
2. Makes request to a server.
3. E.g - Asking for the HTML of the page.
4. Browsers are the most common example of clients.

### Server (Backend)

1. A computer that is sending the information back to the client.
2. Responds to the client requests.
3. Doesn't share the implementation details.
4. Note: Servers can also be clients.
5. E.g - A server requesting data from a database.

Sometimes a single computer can be both server and client in two different interactions. Such as, the browser could request the server for HTML, here the browser is the client. Then the server request the db for whether the person is algoexpert user or not. Here the server is a client while the db is acting as a server.

**Q. Should my code be on the client or the server ?**
->

| Client                | Server                        |
| --------------------- | ----------------------------- |
| Fast                  | Slow, wait on network         |
| User can see the code | Hidden Implementation details |
| Low Computing Power   | High Computing Power          |
| No direct DB access   | Easy DB access                |

## 2 - Webpage Request Lifecycle

The first key point here is that algoexpert.io is not the entirety of the URL that is actually being requested.

E.g of a full URL - <https://www.algoexpert.io:443/frontend>

First part of the URL is -> HTTP or HTTPS, and this is the scheme or the protocol. So essentially this is saying how is this request going to be formatted.

HTTP and HTTPS are standard protocols for the communication on the internet.

So _algoexpert_ is the actual domain name. This is the name of the website, and _www_ is a subdomain, so you can think it like a domain inside of the algoexpert domain.
The reality is that we don't actually need these sub domains, while the vast majority of the website do chose to treat traffic the same, regardless if they use the www subdomain or not, they can be treated differently.
**WWW** stands for _World Wide Web_, and it was used in the old days of the internet to specify this was the subdomain for the web as opposed to other domains they might have such as one for an email.

You can still see the subdomains used occasionally, for eg some websites will have occasionally admin panel, and that panel may be `admin.` and then the website.

So the domain name is actually broken down in the name of the website and then we have top level domain. You may have seen sime such as `.com` or `.net`, etc. Most of these top level domains are associated with countries.

Next we a port, this can optionally be left off because there is a default port, so with https the default port is going to be 443, and with http the default port is going to be 80. You may actually never need to actually include a port with the URL.

And then finally, we have the path through the resource that we are requesting, if we are requesting the homepage most servers allow us to not include any path. However, if we need some specific resource, for eg if you want to go to frontend expert page of algoexpert, you would use the `/frontend` path.

There are also other things that can be included ->

1. **Query Parameters** - Key value pairs that we can pass to the sever to give ot more information usually for filtering down some content. So for eg, if you were searching in amazon for products with a maximum price of 10$ you might have a `?max_price = 10` query parameter.
2. **Fragment** - It uses the Pound sign(#), and then you add the id of some element in the HTML and browsers will handle this by scrolling through that element by default. So for eg, `#content` and this would automatically scroll the id of content when the page is loaded.

An IP address is going to be an unique identifier for a computer on the internet and to actually find the IP address in any given domain we use something known as **DNS** or _Domain Name System_.

**Domain Name System(DNS)** -

1. Converts domain names into IP address.
2. E.g - algoexpert.io -> 35.202.194.70.
3. always checks the local cache before making a network request.
4. So your OS is keeping a local cache of every IP address that has recently been found with the domain name system, that way we don't hav eto make repeated network request for the same IP address.
5. But then in the case the IP address is not in the local cache a DNS request is issued on the network.
6. This request starts by going in the _resolving name server_, which checks it's own cache, and the resolving name server is just you ISP(Internet Service Provider).
7. But this is not always the case, if the resolving name server doesn't resolve the IP address of _algoexpert.io_ in this instance.
8. Then it is going to look in the _root name server_, and this server simply holds the mapping of top level domains such as .io to the IP address what we call top level domain name servers.
9. So for each top level domain, such as .io there is a server that will know how to locate the IP address of all of the registered domains in that top level domain.
10. Now the root level server can tell the _resolving name server_ where the _top level domain server_ is, and now the _resolving server_ is going to make a request to the correct _top level domain name server_.
11. So now, we have reached the _top level domain name server_, so this server simply says "I don't know the IP address you are looking for, but the _authoritative name server_ has the IP address that you are looking for".
12. Then it will redirect the _resolving name server_ to the _Authoritative name server_, and finally the _authoritative name server_ will actually give us the domain that we were looking for, so it will send that IP address to the _resolving name server_, which sends it all the way back to the us, so that our browser knows where to look for the server.

Now we have the IP address of _algoexpert.io_, but then hpw does the browser actually connect to _algoexpert.io_

**Connecting to the Server** -

1. Using the IP address, open a TCP(Transmission control protocol) connection
