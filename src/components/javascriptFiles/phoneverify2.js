const formatToPhone = (event) => {
	if (isModifierKey(event)) {
		return;
	}

	const target = event.target;
	const input = target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
	const zip = input.substring(0, 3);
	const middle = input.substring(3, 6);
	const last = input.substring(6, 10);

	if (input.length > 6) {
		target.value = `(${zip}) ${middle} - ${last}`;
	} else if (input.length > 3) {
		target.value = `(${zip}) ${middle}`;
	} else if (input.length > 0) {
		target.value = `(${zip}`;
	}
};
