function throttle(fn, delay) {
    let timeout
    let start = new Date()
    const threshold = delay || (1000 / 60)
    return function () {
        let context = this, args = arguments, current = new Date() - 0
        clearTimeout(timeout)
        if (current - start >= threshold) {
            fn.apply(context, args)
            start = current
        } else {
            timeout = setTimeout(() => fn.apply(context, args), threshold)
        }
    }
}

export default throttle