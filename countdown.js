let graduationDate = 'May 4 2021 9:00:00 GMT-0400';
function time_remaining(endtime){
	let time = Date.parse(endtime) - Date.parse(new Date());
	let seconds = Math.floor( (time/1000) % 60 );
	let minutes = Math.floor( (time/1000/60) % 60 );
	let hours = Math.floor( (time/(1000*60*60)) % 24 );
    let days = Math.floor( (time/(1000*60*60*24)) % 365 );
    let years = Math.floor(time/(1000*60*60*24*365))
	return {'total':time, 'years':years,'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	let clock = document.getElementById(id);
	
    let years = clock.querySelector('.years');
	let days = clock.querySelector('.days');
	let hours = clock.querySelector('.hours');
	let minutes = clock.querySelector('.minutes');
	let seconds = clock.querySelector('.seconds');

	function update_clock(){
		let time = time_remaining(endtime);
		
        years.innerHTML = time.years;
		days.innerHTML = ('0' + time.days).slice(1,3);
		hours.innerHTML = ('0' + time.hours).slice(1,3);
		minutes.innerHTML = ('0' + time.minutes).slice(1,3);
		seconds.innerHTML = ('0' + time.seconds).slice(1,3);
		
		if(time.total<=0){ clearInterval(timeinterval); }
	}
	update_clock();
	let timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',graduationDate);