const Cards = ({ users, deleteUser }) => {
    return (
        <div className="p-4 w-64 border border-gray-400 shadow-md rounded-2xl flex flex-col gap-6 text-white bg-gray-800">
            <div className="h-60">
                <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={users.image}
                    alt="user-avatar"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-xl">{users.name}</h2>
                <p className="font-semibold text-sm">{users.email}</p>
                <p className="font-semibold text-sm">{users.mobile}</p>
            </div>
            <div className="flex justify-between">
                <button onClick={()=>deleteUser(users.id)} className="bg-red-700 px-6 py-2 rounded-lg  hover:bg-red-900 transition-all duration-200 cursor-pointer hover:scale-102 uppercase">delete</button>
                <button className="bg-blue-700 px-6 py-2 rounded-lg hover:bg-blue-900 transition-all duration-200 cursor-pointer hover:scale-102 uppercase">edit</button>
            </div>
        </div>
    )
}

export default Cards