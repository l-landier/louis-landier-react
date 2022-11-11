export const animationScrollTop = scrollEndElem => {
  const easeInCubic = t => t * t * t;

  const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
    const runtime = stamp - start;
    const progress = runtime / duration;
    const ease = easeInCubic(progress);

    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);

    if (runtime < duration) {
      requestAnimationFrame(() => {
        const newStamp = new Date().getTime();
        scrollToElem(start, newStamp, duration, scrollEndElemTop, startScrollOffset);
      });
    }
  };

  requestAnimationFrame(() => {
    const stamp = new Date().getTime();
    const duration = 1200;
    const start = stamp;
    const navHeader = document.getElementById('nav-header').clientHeight;
    const startScrollOffset = window.pageYOffset;

    const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top - navHeader;

    scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
  });
};

export const smoothScroll = () => {
  const scrollElems = document.getElementsByClassName('smooth-scroll');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < scrollElems.length; i++) {
    const elem = scrollElems[i];

    elem.addEventListener('click', e => {
      console.log('ah que coucou');
      e.preventDefault();
      const scrollElemId = e.currentTarget.dataset.scrollTo;
      const scrollEndElem = document.getElementById(scrollElemId);

      animationScrollTop(scrollEndElem);
    });
  }
};
