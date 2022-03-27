const counters = document.querySelectorAll('.counter');
const speed = 600;

counters.forEach(function (counter) {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
