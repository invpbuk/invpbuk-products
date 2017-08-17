

/*
 * POST /v1/authorisations
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postV1Authorisations = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /v1/balances/{accountId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * accountId(type: string) - path parameter -
 */
exports.getV1Balances = function(req, res) {
	req.check('accountId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({
		available: 100,
		status: 200
	});
};

/*
 * GET /v1/transactions/{accountId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * accountId(type: string) - path parameter -
 */
exports.getV1Transactions = function(req, res) {
	req.check('accountId', 'Invalid accountId').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json([
		{
            "id": "37d63d95-fb77-4cb5-b0fd-59abf282fe7e",
            "currency": "GBP",
            "valueDate": "2016-12-25",
            "postingDate": "2016-12-25",
            "narrative": "Cash in yo",
            "amount": 200.76,
            "transactionCode": "111",
            "transactionDescription": "Faster Payment",
            "ledgerBalance": 200.76,
			"status": "CLEARED"
        },
		{
			"id": "e7721176-1c31-49fb-aad0-f20555ca6655",
			"currency": "GBP",
            "valueDate": "2016-12-26",
            "postingDate": "2016-12-26",
            "narrative": "Gas bill",
            "amount": -63.76,
            "transactionCode": "222",
            "transactionDescription": "Faster Payment British Gas",
            "ledgerBalance": 137,
			"status": "PENDING"
		},
	]);
};