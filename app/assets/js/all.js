const elem = document.querySelector('input[name="datepicker"]');
if (elem) {
  const datepicker = new Datepicker(elem, {
    format: "yyyy/mm/dd",
    language: "zh-TW",
  });
}