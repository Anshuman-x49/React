const Navbar = ({ setToggle }) => {

  const changeState = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div className='flex justify-between p-6 bg-gray-800 shadow-md rounded-lg text-white'>
      <h1 className='font-bold text-2xl'>Logo</h1>
      <button onClick={changeState} className='bg-blue-700 hover:bg-blue-900 hover:scale-105 duration-150 transition-all px-6 py-2 rounded-lg font-medium cursor-pointer'>Create user</button>
    </div>
  )
}

export default Navbar