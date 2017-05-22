function buildConsecutive(step = 1, num = 3) {
  return function (arr) {
    const list = arr.reduce((prev, current, index) => {
      const steps = Array(num).fill(0)
      steps.forEach((x, i) => {
        if (prev[prev.length - i]) {

          const last = Array.from(prev[prev.length - i]).reverse()

          const [one, two] = last

          const _step = one && two ? (one - two) : step
          const _diff = current - one
          const _match = two ? _diff === _step : Math.abs(_diff) === _step

          let match = _match

          if (match) {
            prev[prev.length - i].push(current)
          }
        }

      })
      prev.push([current])
      return prev
    }, [])
    return list.reduce((prev, current, index) => {
      if (current.length === num) {
        prev.push(index)
      }
      return prev
    }, [])
  }
}

export default buildConsecutive