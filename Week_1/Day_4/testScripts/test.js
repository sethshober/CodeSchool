function setReminder (day) {
	var date = new Date();
	var today = date.getDay();

	if ( day === today ) {

		console.log("You have an appointment.");

	} else {

		setTimeout(setReminder(day), 86400000);

	}
}

module.exports = {

	setReminder: setReminder

};

setReminder();