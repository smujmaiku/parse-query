var parseQuery = (query) => {
	if (!query) return {};
	if (query.startsWith('?')) return parseQuery(query.slice(1));

	return query.split('&').reduce((obj, row) => {
		var index = row.indexOf('=');
		if (index < 0) {
			return Object.assign(
				obj,
				{ [row]: true },
			);
		}
		return Object.assign(
			obj,
			{ [row.slice(0, index)]: decodeURIComponent(row.slice(index + 1)) },
		);
	}, {});
};

exports = module.exports = parseQuery;
