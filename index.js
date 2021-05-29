document.addEventListener("DOMContentLoaded", function() {
  startCountdown()
});

startCountdown = () => {

  // let currentTime = new Date()
  let targetDate = new Date('Oct 26, 2021').getTime()

  let x = setInterval(() => {
    console.log('x gon give it to ya')
    // todays date/time
    let now = new Date().getTime()

    // distance between now and target date
    let distance = targetDate - now;

    // calculate days, hours, minutes, seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display the results
    document.querySelector('.display-days').innerHTML = days
    document.querySelector('.display-hours').innerHTML = hours
    document.querySelector('.display-minutes').innerHTML = minutes
    document.querySelector('.display-seconds').innerHTML = seconds

    if (distance <= 0) {
      clearInterval(x)
    }
  }, 1000)

  // get days from current time
  // get hours from current time
  // get minutes from current time
  // get seconds from current time

  // calculate difference between these values and our target date

  // update each counter-display to display the appropriate value

}