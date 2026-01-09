import { useState } from 'react'

const Form = (props) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const capitalizeFirst = (str) => {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setTask(prevTask => [...prevTask, { title, content }])
        setTitle("")
        setContent("")
    }

    return (
        <div className='w-full md:w-1/2'>
            <form className='flex flex-col gap-4 w-full items-start p-6 md:p-10' onSubmit={(e) => { handleSubmit(e) }}>
                <h1 className='text-3xl md:text-4xl font-bold'>Add Note</h1>
                <input
                    type="text"
                    placeholder='Title'
                    className='w-full px-5 py-2 font-medium border-2 rounded outline-none'
                    value={title}
                    onChange={(e) => {
                        setTitle(capitalizeFirst(e.target.value))
                    }}
                />

                <textarea
                    placeholder='Content'
                    className='w-full h-42 px-5 py-2 font-medium border-2 rounded outline-none'
                    value={content}
                    onChange={(e) => {
                        setContent(capitalizeFirst(e.target.value))
                    }}
                />

                <button className='w-full bg-white hover:bg-gray-200 active:scale-99 transition-all duration-300 text-black font-medium px-5 py-2 rounded outline-none'>Add Note</button>

            </form>
        </div>
    )
}

export default Form