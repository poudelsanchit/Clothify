import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name={'Real Madrid Designer Kit'} img={'https://cf.shopee.com.my/file/149ead55ea80fdeca6684db87965ba7e?fbclid=IwAR2LGDAt3HiuniVFjkwmbITL2WaaGr-EGenbOMQMIhB8pkBQD2L0I_N9uPQ'} type={'SportsWear'} price={2500} />
      <Card name={'Air Jordan 1'} img={'https://i.pinimg.com/originals/01/7f/4d/017f4d42ca67c22df0249c1d0e51e1ae.jpg'} type={'Luxary Footwear'} price={10000} size={8} />
      <Card name={'Nike Mercurial'} img={'https://i.pinimg.com/originals/e8/24/12/e82412bc59e4888e27c1911eb9e355c5.jpg'} type={'Sports Gear'} price={6000} />
    </>
  )
}

export default App
