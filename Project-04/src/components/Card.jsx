import 'remixicon/fonts/remixicon.css'

const Card = (props) => {

  const capitalizeFirst = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const deleteTask = (idx) => {
    props.setTask(prevTask => {
      return prevTask.filter((_, i) => i !== idx)
    })
  }

  return (
    <div className='w-full md:w-1/2 p-6 md:p-10 md:border-l-2 md:border-t-0 border-t-2'>
      <h1 className='text-3xl md:text-4xl font-bold mb-5'>Recent Notes</h1>
      <div className='flex flex-wrap gap-3 md:gap-5 h-auto md:h-[90%] overflow-auto pb-6 md:pb-0'>
        {props.task.map((elem, idx) => {
          return (
            <div key={idx} className='relative h-44 w-36 sm:h-52 sm:w-40 bg-white rounded-2xl text-black px-4 py-4 sm:px-6 sm:py-5 overflow-hidden'>
              <i onClick={() => {
                deleteTask(idx)
              }} className="ri-close-line absolute top-1 right-3 cursor-pointer text-lg hover:text-red-600 transition-all duration-300"></i>
              <h2 className='leading-tight text-lg font-bold mb-2 wrap-break-word'>{capitalizeFirst(elem.title)}</h2>
              <p className='leading-tight text-sm font-semibold overflow-hidden wrap-break-word text-gray-600'>{capitalizeFirst(elem.content)}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card