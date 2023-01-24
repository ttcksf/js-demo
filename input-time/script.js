const inputTime = document.querySelector("#inputTime");
const timeResult = document.querySelector("#timeResult");
inputTime.addEventListener("change", (e) => {
  const value = e.target.value;
  timeResult.innerHTML = value;
});

const inputDate = document.querySelector("#inputDate");
const dateResult = document.querySelector("#dateResult");
inputDate.addEventListener("change", (e) => {
  const value = e.target.value;
  dateResult.innerHTML = value;
});

const inputDateTime = document.querySelector("#inputDateTime");
const dateTimeResult = document.querySelector("#dateTimeResult");
inputDateTime.addEventListener("change", (e) => {
  const value = e.target.value;
  dateTimeResult.innerHTML = value;
});

const inputWeek = document.querySelector("#inputWeek");
const weekResult = document.querySelector("#weekResult");
inputWeek.addEventListener("change", (e) => {
  const value = e.target.value;
  weekResult.innerHTML = value;
});
