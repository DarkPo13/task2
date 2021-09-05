  $(function () {
    var rotation = 0,
      scrollLoc = $(document).scrollTop();
    $(window).scroll(function () {
      var newLoc = $(document).scrollTop();
      var diff = scrollLoc - newLoc;
      rotation += diff, scrollLoc = newLoc;
      var rotationStr = "rotate(" + rotation * 0.5 + "deg)";
      $(".rotate").css({
        "-webkit-transform": rotationStr,
        "-moz-transform": rotationStr,
        "transform": rotationStr
      });
    });
  });

  /*const callback = function (entries) {
    entries.forEach(entry => {
      if (entry.target.classList.contains("animation-section__quote1")) {
        entry.target.classList.toggle("is-visible--1");
      } else if (entry.target.classList.contains("animation-section__quote2")) {
        entry.target.classList.toggle("is-visible--2");
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function (target) {
    observer.observe(target);
  });*/

  var scroll = window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    };
  var elementsToShow = document.querySelectorAll('.show-on-scroll');

  function loop() {

    Array.prototype.forEach.call(elementsToShow, function (element) {
      if (isElementInViewport(element) && element.classList.contains("animation-section__quote1")) {
        element.classList.add('is-visible--1');
      } else if (isElementInViewport(element) && element.classList.contains("animation-section__quote2")) {
        element.classList.add('is-visible--2');
      } else {
        element.classList.remove('is-visible--1');
        element.classList.remove('is-visible--2');
      }
    });

    scroll(loop);
  }

  loop();

  function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 &&
        rect.bottom >= 0) ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }