function calculateAge() {
  const dob = document.getElementById("dob").value;
  if (!dob) {
    document.getElementById("result").innerHTML = "Please select your date of birth!";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerHTML =
    Your age is <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days.;
}