import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faUserPlus, faPenToSquare, faCheck } from "@fortawesome/free-solid-svg-icons";
import type { Employee, EmployeeFormData } from "../../hooks/useEmployee";

interface EmployeeFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: EmployeeFormData) => Promise<void>;
    employee?: Employee | null;
    isLoading?: boolean;
}

const EmployeeFormModal = ({
    isOpen,
    onClose,
    onSubmit,
    employee,
    isLoading = false,
}: EmployeeFormModalProps) => {
    const isEdit = Boolean(employee);

    const [formData, setFormData] = useState<EmployeeFormData>({
        name: "",
        email: "",
        department: "developer",
        role: "employee",
        status: "active",
        avatar: "",
    });

    useEffect(() => {
        if (employee) {
            setFormData({
                name: employee.name || "",
                email: employee.email || "",
                department: employee.department || "developer",
                role: employee.role || "employee",
                status: employee.status || "active",
                avatar: employee.avatar || "",
            });
        } else {
            setFormData({
                name: "",
                email: "",
                department: "developer",
                role: "employee",
                status: "active",
                avatar: "",
            });
        }
    }, [employee, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await onSubmit(formData);
            onClose();
        } catch (error) {
            console.error("Failed to save employee:", error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
            <div
                className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-(--border) bg-(--surface) shadow-2xl transition-all my-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-(--border) bg-(--surface-low) px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--primary)/15 text-(--primary) border border-(--primary)/20">
                            <FontAwesomeIcon icon={isEdit ? faPenToSquare : faUserPlus} className="h-4 w-4" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-(--text)">
                                {isEdit ? "Edit Employee" : "Add New Employee"}
                            </h2>
                            <p className="text-xs text-(--text-muted)">
                                {isEdit ? "Update employee details" : "Fill details to create employee record"}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-(--surface-high) text-(--text-muted) hover:text-(--text) transition-colors cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-(--text-muted) mb-1.5">
                            Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Netra Rajbanshi"
                            className="w-full rounded-xl border border-(--border) bg-(--surface-low) px-3.5 py-2.5 text-sm text-(--text) placeholder:text-(--text-muted) outline-none transition-all focus:border-(--primary) focus:bg-(--surface-high)"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-(--text-muted) mb-1.5">
                            Email Address <span className="text-rose-400">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. netra@gmail.com"
                            className="w-full rounded-xl border border-(--border) bg-(--surface-low) px-3.5 py-2.5 text-sm text-(--text) placeholder:text-(--text-muted) outline-none transition-all focus:border-(--primary) focus:bg-(--surface-high)"
                        />
                    </div>

                    {/* Grid of Department & Role */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Department */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-(--text-muted) mb-1.5">
                                Department
                            </label>
                            <select
                                value={formData.department}
                                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                className="w-full rounded-xl border border-(--border) bg-(--surface-low) px-3.5 py-2.5 text-sm text-(--text) outline-none transition-all focus:border-(--primary) cursor-pointer capitalize"
                            >
                                <option value="developer">Developer</option>
                                <option value="engineering">Engineering</option>
                                <option value="design">Design</option>
                                <option value="marketing">Marketing</option>
                                <option value="finance">Finance</option>
                                <option value="hr">HR</option>
                            </select>
                        </div>

                        {/* Role */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-(--text-muted) mb-1.5">
                                Role
                            </label>
                            <select
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                className="w-full rounded-xl border border-(--border) bg-(--surface-low) px-3.5 py-2.5 text-sm text-(--text) outline-none transition-all focus:border-(--primary) cursor-pointer capitalize"
                            >
                                <option value="employee">Employee</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>
                    </div>

                    {/* Grid of Status & Avatar URL */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Status */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-(--text-muted) mb-1.5">
                                Status
                            </label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="w-full rounded-xl border border-(--border) bg-(--surface-low) px-3.5 py-2.5 text-sm text-(--text) outline-none transition-all focus:border-(--primary) cursor-pointer"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="on_leave">On Leave</option>
                            </select>
                        </div>

                        {/* Avatar URL */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-(--text-muted) mb-1.5">
                                Avatar URL (Optional)
                            </label>
                            <input
                                type="url"
                                value={formData.avatar}
                                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                                placeholder="https://..."
                                className="w-full rounded-xl border border-(--border) bg-(--surface-low) px-3.5 py-2.5 text-sm text-(--text) placeholder:text-(--text-muted) outline-none transition-all focus:border-(--primary) focus:bg-(--surface-high)"
                            />
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-end gap-3 border-t border-(--border) pt-5 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-(--border) bg-(--surface-low) px-4 py-2.5 text-xs font-semibold text-(--text-muted) hover:text-(--text) transition-colors cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex items-center gap-2 rounded-xl bg-(--primary) px-5 py-2.5 text-xs font-semibold text-(--on-primary) shadow-sm hover:opacity-90 transition-all cursor-pointer disabled:opacity-50"
                        >
                            <FontAwesomeIcon icon={faCheck} className="h-3.5 w-3.5" />
                            <span>{isLoading ? "Saving..." : isEdit ? "Save Changes" : "Create Employee"}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeFormModal;
