import React, { useEffect, useState } from 'react'

const Thankyou = ({ history }) => {
  const [valid, setValid] = useState(false)
  useEffect(() => {
    let data = history.location.search.split('?').pop()
    data = data.split('=')
    if (data[0] == 'validate') setValid(true)
    else history.push('/')
  }, [valid])
  return <h1>{valid && 'Thank You...'}</h1>
}

export default Thankyou
