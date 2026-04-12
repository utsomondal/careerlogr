import apiFetch from "./apiFetch";

// GET all
export const getApplications = () => {
  return apiFetch("/api/applications");
};

// CREATE
export const createApplication = (data) => {
  return apiFetch("/api/applications", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// UPDATE
export const updateApplication = (id, data) => {
  return apiFetch(`/api/applications/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

// DELETE
export const deleteApplication = (id) => {
  return apiFetch(`/api/applications/${id}`, {
    method: "DELETE",
  });
};