import { useState } from "react";
import ApplicationRow from "./ApplicationRow";
import DeleteModal from "./DeleteModal";
import MobileApplicationCards from "./MobileApplicationCards";
import { useQueryClient } from "@tanstack/react-query";
import { deleteApplication } from "../../api/application";
import toast from "react-hot-toast";

const ApplicationsTable = ({ applications }) => {
  const [deleteTarget, setDeleteTarget] = useState(null);
  const queryClient = useQueryClient();

  const handleConfirmDelete = async () => {
    try {
      if (!deleteTarget?._id) return;

      await deleteApplication(deleteTarget._id);
      queryClient.invalidateQueries({ queryKey: ["applications"] });

      setDeleteTarget(null);
      toast.success("Application deleted successfully");
    } catch {
      toast.error("Failed to delete application");
    }
  };

  return (
    <div className="w-full">
      <div className="block lg:hidden">
        <MobileApplicationCards
          applications={applications}
          onDelete={setDeleteTarget}
        />
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden lg:block overflow-x-auto rounded-xl border border-white/6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/6">
              <th className="py-3 px-5 text-left text-[12px] text-gray-500 uppercase">
                Company
              </th>
              <th className="py-3 px-5 text-left text-[12px] text-gray-500 uppercase">
                Role
              </th>
              <th className="py-3 px-5 text-left text-[12px] text-gray-500 uppercase">
                Status
              </th>
              <th className="py-3 px-5 text-left text-[12px] text-gray-500 uppercase">
                Date Applied
              </th>
              <th className="py-3 px-5 text-left text-[12px] text-gray-500 uppercase">
                Salary
              </th>
              <th className="py-3 px-5 text-left text-[12px] text-gray-500 uppercase">
                Type
              </th>
              <th className="py-3 px-5 text-left text-[12px] text-gray-500 uppercase">
                Job Link
              </th>
              <th className="py-3 px-5 text-left text-[12px] text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <ApplicationRow
                key={app._id}
                application={app}
                onConfirmDelete={() => setDeleteTarget(app)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <DeleteModal
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleConfirmDelete}
        company={deleteTarget?.company}
        role={deleteTarget?.role}
      />
    </div>
  );
};

export default ApplicationsTable;
