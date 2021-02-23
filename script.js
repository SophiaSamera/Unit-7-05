document.getElementById('button').addEventListener('click', comparison)
let age = 11
let day = 'Wednesday'

function comparison () {
  day = document.getElementById('input').value
  age = document.getElementById('input1').value
  age = parseInt(age)

  if ((day !== 'Saturday' && day !== 'Sunday') && age => 18) {
    document.getElementById('answer').innerHTML = 'Time to go to work!';
  } else if ((day !== 'Saturday' && day !== 'Sunday') && age < 18) {
    document.getElementById('answer').innerHTML = 'Time to go to school!';
  } else {
    ((day === 'Saturday') || (day === 'Sunday'))
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!';
  }
}
