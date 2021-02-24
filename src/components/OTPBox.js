import React, { useState, useEffect, useRef } from 'react'

const OTPBox = ({ history }) => {
  const [otp, setOtp] = useState(new Array(4).fill(''))
  const [visible, setVisible] = useState(false)
  const [counter, setCounter] = useState(0)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (counter == 3) {
      setVisible(true)
    }
  }, [counter, visible, error])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  const handleOnKeyDown = (e) => {
    if (e.key == 'Backspace' || e.key == 'Delete') e.target.value = ''
  }

  const resendHandler = () => {
    setCounter((prevState) => prevState + 1)
    setOtp([...otp.map((v) => '')])
    inputRef.current.focus()
  }

  const submitHandler = () => {
    if (otp.join('') == '576') history.push('thankyou?validate=true')
    else {
      setError('Invalid OTP')
      inputRef.current.focus()
    }
  }

  return (
    <div className='otpContainer'>
      <p>Enter the OTP sent to you.</p>

      <input
        className='otpInput'
        ref={inputRef}
        type='text'
        name='otp'
        maxLength='1'
        value={otp[0]}
        onChange={(e) => handleChange(e.target, 0)}
        onKeyDown={handleOnKeyDown}
        onFocus={(e) => e.target.select()}
      />
      <input
        className='otpInput'
        type='text'
        name='otp'
        maxLength='1'
        value={otp[1]}
        onChange={(e) => handleChange(e.target, 1)}
        onKeyDown={handleOnKeyDown}
        onFocus={(e) => e.target.select()}
      />
      <input
        className='otpInput'
        type='text'
        name='otp'
        maxLength='1'
        value={otp[2]}
        onChange={(e) => handleChange(e.target, 2)}
        onKeyDown={handleOnKeyDown}
        onFocus={(e) => e.target.select()}
      />

      <br />

      <p>{error}</p>
      <p>
        <button
          className='btn btn-secondary mr-2'
          disabled={visible}
          onClick={resendHandler}>
          Resend
        </button>
        <button className='btn btn-primary' onClick={submitHandler}>
          Verify OTP
        </button>
      </p>
    </div>
  )
}

export default OTPBox
