import {
    Mail,
    Phone,
    Pencil,
    Trash2,
    MoreVertical,
} from "lucide-react";

export default function UserCard({
    user
}) {
    return (
        <div className="group w-72 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg">

            {/* Top */}
            <div className="flex justify-end">
                <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100">
                    <MoreVertical size={18} />
                </button>
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center">

                <img
                    src={user.avatar || `https://ui-avatars.com/api/?name=${user.name?.firstname || ''}+${user.name?.lastname || ''}&background=random`}
                    alt={user.name ? `${user.name.firstname} ${user.name.lastname}` : 'User'}
                    className="h-20 w-20 rounded-full border border-gray-200 object-cover"
                />

                <h2 className="mt-4 text-lg font-semibold text-gray-900">
                    {user.name ? `${user.name.firstname} ${user.name.lastname}` : 'Unknown User'}
                </h2>

                <p className="text-sm text-gray-500">
                    {user.role || 'User'}
                </p>
            </div>

            {/* Info */}
            <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail size={16} />
                    <span className="truncate">
                        {user.email}
                    </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone size={16} />
                    <span>{user.phone}</span>
                </div>

            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">

                <button
                    // onClick={() => onEdit(user)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-sm font-medium transition hover:bg-gray-100"
                >
                    <Pencil size={16} />
                    Edit
                </button>

                <button
                    // onClick={() => onDelete(user.id)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                >
                    <Trash2 size={16} />
                    Delete
                </button>

            </div>
        </div>
    );
}