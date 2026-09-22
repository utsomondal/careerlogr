import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../api/application";
import Loading from "../components/Loading";
import ErrorDisplay from "../components/ErrorDisplay";
import ApplicationsHeader from "../components/ApplicationPage/ApplicationsHeader";
import ApplicationsFilters from "../components/ApplicationPage/ApplicationsFilters";
import ApplicationsTable from "../components/ApplicationPage/ApplicationsTable";

const Applications = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
  });

  const applications = useMemo(() => data?.data || [], [data?.data]);

  const filtered = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch = app.company
        ?.toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesStatus =
        status === "All" || app.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, status]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorDisplay error={error} />;

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <ApplicationsHeader count={filtered.length} total={applications.length} />

        {applications.length === 0 ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <p className="text-dark-500 text-lg">No applications yet.</p>
          </div>
        ) : (
          <>
            <ApplicationsFilters
              search={search}
              onSearchChange={setSearch}
              status={status}
              onStatusChange={setStatus}
            />

            {filtered.length === 0 ? (
              <div className="flex items-center justify-center min-h-[40vh]">
                <p className="text-dark-500 text-lg">
                  No applications match your filters.
                </p>
              </div>
            ) : (
              <ApplicationsTable applications={filtered} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Applications;