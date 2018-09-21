module.exports = {
	customMedia: {
		'--mq-a': '(max-width: 30em), (max-height: 30em)',
		'--not-mq-a': 'not all and (--mq-a)',
		'--mq-b': 'screen and (max-width: 30em)',
		'--circular-mq-a': '(--circular-mq-b)',
		'--circular-mq-b': '(--circular-mq-a)'
	}
};
