# Status codes

# 200 - Successful Request
# 201 - Successful Insert / Successful update
# 401 - Unauthorized 
# 404 - Not found
# 500 - Server error FOR US a blanket statement 

# https://http.cat


Larger list
## Informational (1xx):

- **100 Continue**: The server has received the initial part of the request and is willing to continue processing.
- **101 Switching Protocols**: The server has agreed to switch protocols, such as upgrading to WebSocket.

## Successful (2xx):

- **200 OK**: The request was successful, and the server returns the requested data.
- **201 Created**: The request was fulfilled, and a new resource has been created as a result.
- **204 No Content**: The request was successful, but no data is returned in the response body.

## Client Errors (4xx):

- **400 Bad Request**: The request has invalid syntax or missing parameters.
- **401 Unauthorized**: Authentication is required, and the client failed to provide valid credentials.
- **403 Forbidden**: The server understands the request but refuses to fulfill it due to lack of permission.
- **404 Not Found**: The requested resource does not exist on the server.
- **405 Method Not Allowed**: The HTTP method used is not supported for the resource.

## Server Errors (5xx):

- **500 Internal Server Error**: Something unexpected went wrong on the server, and it cannot specify the exact problem.
- **502 Bad Gateway**: A server acting as a gateway or proxy received an invalid response from an upstream server.
- **503 Service Unavailable**: The server is temporarily unable to handle the request due to overloading or maintenance.
- **504 Gateway Timeout**: The proxy server did not receive a timely response from the upstream server.

## Other Common Status Codes:

- **429 Too Many Requests**: The user has sent too many requests within a specific time frame, exceeding rate limits.
- **301 Moved Permanently**: The requested resource has been permanently moved to a different URL.
- **302 Found (Temporary Redirect)**: The requested resource can be found under a different URL temporarily.
- **304 Not Modified**: The resource has not been modified since the last request, allowing the client to use its cached copy.