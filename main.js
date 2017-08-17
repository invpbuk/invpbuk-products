var v1 = require("./routes/v1.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/v1/authorisations", "POST", v1.postV1Authorisations);
Sandbox.define("/v1/balances/{accountId}", "GET", v1.getV1Balances);
Sandbox.define("/v1/transactions/{accountId}", "GET", v1.getV1Transactions);

Sandbox.define('/swagger/ui/{path:.*}','GET', function(req, res){
    if (req.params.path.endsWith('.css')) {
        res.type('text/css');
    }
    res.render(req.params.path, {
        "_passUnrenderedTemplate": true
    });
})

Sandbox.define('/swagger', 'GET', function(req, res){
    res.type('text/html');
    return res.render('index.html');
});

Sandbox.define('/test','GET', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})