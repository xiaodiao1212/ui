import { useEffect, useState } from 'react';

interface CountDownProps {
  h?: number
  m?: number
  s?: number
  time?: number
  label?: React.ReactNode
}

const CountDown = (props: CountDownProps) => {
  const { h = 0, m = 0, s = 0 , time = 0, label } = props;
  let end: number = h * 3600 + m * 60 + s
  let timeEnd: number = time;
  const [loading, setLoading] = useState(false)
  const [num, setNum] = useState(end)
  const [timeNum, setTimeNum] = useState(timeEnd)
  const [ho, setHours] = useState<any>('') //小时
  const [mi, setMinutes] = useState<any>('') //分钟
  const [se, setSeconds] = useState<any>('') //秒
  useEffect(() => {
    let timer: any
    timer = 0
    if (num !== 0) {
      timer = setInterval(() => {
        setNum(n => {
          let hours =
            Math.floor((n / 60 / 60) % 24) < 10 ? `0${Math.floor((n / 60 / 60) % 24)}` : Math.floor((n / 60 / 60) % 24)
          let minutes = Math.floor((n / 60) % 60) < 10 ? `0${Math.floor((n / 60) % 60)}` : Math.floor((n / 60) % 60)
          let seconds = Math.floor(n % 60) < 10 ? `0${Math.floor(n % 60)}` : Math.floor(n % 60)
          setHours(() => hours)
          setMinutes(() => minutes)
          setSeconds(() => seconds) //函数写法保证值在setInterval里更新，避免useEffect的bug
          setLoading(true)
          if (n === 0) {
            clearInterval(timer)
          }
          return n - 1
        })
      }, 1000)
    }
    if(timeNum !== 0) {
      timer = setInterval(() => {
        setTimeNum(n => {
          let hours =
            Math.floor((n / 60 / 60) % 24) < 10 ? `0${Math.floor((n / 60 / 60) % 24)}` : Math.floor((n / 60 / 60) % 24)
          let minutes = Math.floor((n / 60) % 60) < 10 ? `0${Math.floor((n / 60) % 60)}` : Math.floor((n / 60) % 60)
          let seconds = Math.floor(n % 60) < 10 ? `0${Math.floor(n % 60)}` : Math.floor(n % 60)
          setHours(() => hours)
          setMinutes(() => minutes)
          setSeconds(() => seconds) //函数写法保证值在setInterval里更新，避免useEffect的bug
          setLoading(true)
          if (n === 0) {
            clearInterval(timer)
          }
          return n - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [])
  return (
    <>
      {!loading ? 
         label
       : ho * 1 !== 0 ? 
        <span>{`${ho}：${mi}：${se}`}</span>
       : 
        <span>{`${mi}：${se}`}</span>
      }
    </>
  )
}
export default CountDown
