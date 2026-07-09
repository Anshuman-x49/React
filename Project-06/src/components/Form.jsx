import { useForm } from "react-hook-form";
const Form = ({ setUsers, setToggle }) => {
    let {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        
    });

    console.log(errors)

    const formSubmit = (data) => {
        console.log(data);
        setUsers((prev) => [...prev, data])
        reset();
        setToggle((prev) => !prev)
    }

    return (
        <div className="flex flex-col gap-6 mt-6 items-center justify-center">
            <h1 className="font-bold text-2xl text-center text-white uppercase">
                Create New User
            </h1>
            <form onSubmit={handleSubmit(formSubmit)} className="w-1/4 bg-emerald-50 flex flex-col gap-6 p-4 shadow-lg rounded-2xl">
                <input
                    className="p-2 outline-none rounded border border-gray-200 focus:border-gray-700"
                    {...register("name", {
                        required: "Name is required",
                        minLength: {
                            value: 8,
                            message: "Minimum 8 characters required"
                        }
                    })}
                    type="text"
                    placeholder="Name"
                />
                {errors.name && <p className="text-red-700 text-xs">{errors.name.message}</p>}
                <input
                    className="p-2 outline-none rounded border border-gray-200 focus:border-gray-700"
                    {...register("email",{
                        required:"Email is required",
                        pattern:{
                            value:"",
                            message:"Invalid email"
                        }
                    })}
                    type="email"
                    placeholder="Email"
                />
                {errors.email && <p className="text-red-700 text-xs">{errors.email.message}</p>}
                <input
                    className="p-2 outline-none rounded border border-gray-200 focus:border-gray-700"
                    {...register("mobile",{
                        required:"Mobile number is required",
                        minLength:{
                            value:10,
                            message:"Minimum 10 digits required"
                        },
                        maxLength:{
                            value:10,
                            message:"Maximum 10 digits allowed"
                        }
                    })}
                    type="tel"
                    placeholder="Mobile"
                />
                {errors.mobile && <p className="text-red-700 text-xs">{errors.mobile.message}</p>}
                <input
                    className="p-2 outline-none rounded border border-gray-200 focus:border-gray-700"
                    {...register("image",{
                        required:"Image is required"
                    })}
                    type="url"
                    placeholder="Image URL"
                />
                {errors.image && <p className="text-red-700 text-xs">{errors.image.message}</p>}
                <button
                    className="bg-blue-700 hover:bg-blue-900 hover:scale-101 duration-170 transition-all px-6 py-2 rounded-lg font-medium cursor-pointer text-white uppercase"
                    type="submit"
                >
                    create user
                </button>
            </form>
        </div>
    );
};

export default Form;
