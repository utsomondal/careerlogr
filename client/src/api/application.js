import apiFetch from "./apiFetch";

// CREATE
export const createApplication = (data) => {
  return apiFetch("/applications", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// GET all
export const getApplications = () => {
  return apiFetch("/applications");
};

// GET by ID
export const getApplicationById = (id) => {
  return apiFetch(`/applications/${id}`);
};

// UPDATE
export const updateApplication = (id, data) => {
  return apiFetch(`/applications/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

// DELETE
export const deleteApplication = (id) => {
  return apiFetch(`/applications/${id}`, {
    method: "DELETE",
  });
};