import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FiBriefcase,
  FiUser,
  FiCalendar,
  FiDollarSign,
  FiFileText,
  FiLink,
  FiCheckSquare,
} from "react-icons/fi";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getApplicationById, updateApplication } from "../api/application";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const UpdateApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch existing application
  const { data, isLoading } = useQuery({
    queryKey: ["application", id],
    queryFn: () => getApplicationById(id),
    enabled: !!id,
  });

  // Set form values when data arrives
  useEffect(() => {
    if (data) {
      reset(data.data);
    }
  }, [data, reset]);

  // Update mutation
  const mutation = useMutation({
    mutationFn: (updatedData) => updateApplication(id, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast.success("Application updated successfully!");
      navigate("/applications");
    },
    onError: (error) => {
      toast.error(error.message || "Update failed");
    },
  });

  const onSubmit = (formData) => {
    mutation.mutate(formData);
  };

  const labelStyle = "text-xs text-gray-400 ml-1";

  const inputBase =
    "w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition placeholder:text-gray-500";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col">
      {/* HEADER */}
      <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur border-b border-dark-700 px-6 py-4">
        <h1 className="text-xl font-semibold">Update Application</h1>
        <p className="text-xs text-white/50">
          Edit your application details below
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 p-6 max-w-5xl mx-auto w-full space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company */}
          <div>
            <label className={labelStyle}>Company *</label>
            <div className="relative mt-1">
              <FiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                {...register("company", { required: "Company is required" })}
                className={inputBase}
              />
            </div>
            {errors.company && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className={labelStyle}>Role *</label>
            <div className="relative mt-1">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                {...register("role", { required: "Role is required" })}
                className={inputBase}
              />
            </div>
            {errors.role && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.role.message}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className={labelStyle}>Status *</label>
            <div className="relative mt-1">
              <FiCheckSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <select
                {...register("status", { required: "Status is required" })}
                className={`${inputBase} appearance-none pr-10`}
              >
                <option value="">Choose status</option>
                <option value="Applied">Applied</option>
                <option value="Screening">Screening</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          {/* Salary */}
          <div>
            <label className={labelStyle}>Salary *</label>
            <div className="relative mt-1">
              <FiDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                {...register("salary", { required: "Salary is required" })}
                className={inputBase}
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className={labelStyle}>Date Applied *</label>
            <div className="relative mt-1">
              <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="date"
                {...register("dateApplied", {
                  required: "Date is required",
                })}
                className={inputBase}
              />
            </div>
          </div>

          {/* Job URL */}
          <div>
            <label className={labelStyle}>Job URL *</label>
            <div className="relative mt-1">
              <FiLink className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                {...register("jobUrl", {
                  required: "Job URL is required",
                })}
                className={inputBase}
              />
            </div>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className={labelStyle}>Notes *</label>
            <div className="relative mt-1">
              <FiFileText className="absolute left-3 top-3 text-gray-500" />
              <textarea
                rows={5}
                {...register("notes", {
                  required: "Notes are required",
                })}
                className={inputBase + " pt-3 pl-10 resize-none"}
              />
            </div>
          </div>
        </div>

        {/* Remote */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            className="accent-blue-500 w-4 h-4"
            {...register("isRemote")}
          />
          <span className="text-sm text-white/70">
            Remote position (optional)
          </span>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 pt-6">
          <button
            type="button"
            onClick={() => navigate("/applications")}
            className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="px-6 py-2 rounded-xl bg-accent hover:opacity-90 transition font-medium shadow-md"
          >
            {mutation.isPending ? "Updating..." : "Update Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateApplication;
