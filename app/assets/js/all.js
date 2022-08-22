const elem = document.querySelector('input[name="datepicker"]');
if (elem) {
  const datepicker = new Datepicker(elem, {
    autohide: true,
    language: "zh-CN",
  });
}