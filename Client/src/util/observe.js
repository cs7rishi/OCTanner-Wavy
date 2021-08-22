export function isPrimitive (val) {
  const type = typeof val
  return val == null || (type != 'object' && type != 'function')
}

export default function Observe (target) {
  const _target = Object.seal({...target})

  const _observers = {
    __all__: []
  }

  for (var key in _target) {
    _observers[key] = []
  }

  const traps = {
    set (obj, key, val) {
      let old
      
      if (isPrimitive(obj[key])) {
        old = obj[key]
      } else if (Array.isArray(obj[key])) {
        old = [...obj[key]]
      } else {
        old = {...obj[key]}
      }

      obj[key] = val

      if (_observers[key]) {
        _observers[key].map(observer => observer(val, old))
        _observers.__all__.map(observer => observer(val, old))
      }
      
      return true
    }
  }

  return new Proxy({
    ..._target,
    watch (key, callback) {
      if (typeof key === 'string') {
        if (key in _observers) {
          _observers[key].push(callback)
        }	
      }

      if (typeof key === 'function') {
        _observers.__all__.push(key)
      }
    }
  }, {
    set: traps.set
  })
}