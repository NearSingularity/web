// import IntersectionObserverPolyfill from 'intersection-observer'

const threshold = [0.0, 0.25, 0.5, 0.75, 1.0]

class Observer {
  constructor(opts = {
    threshold
  }) {
    this.observer = 'IntersectionObserver' in window
    && new IntersectionObserver(this.cb.bind(this), opts)
    // : new IntersectionObserverPolyfill(this.cb.bind(this), opts)
  }

  observe(observable, opts) {
    observable.observerOpts = opts
    this.observer.observe(observable)
  }

  unobserve(target) {
    const { targetClass } = target.observerOpts
    if (!target.classList.contains(targetClass)) {
      target.classList.add(targetClass)
      this.observer.unobserve(target)
    }
  }

  cb(entries) {
    entries.forEach(entry => {
      const ratio = entry.boundingClientRect.height > entry.rootBounds.height ? 0 : 0.25 // TODO: use entry.target.observerOpts.ratio

      if (entry.intersectionRatio > ratio) {
        this.unobserve(entry.target)
      }
    })
  }

}

export default new Observer()
