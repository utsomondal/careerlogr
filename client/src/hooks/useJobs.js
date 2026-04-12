import { useContext } from "react";
import JobContext from "../context/JobContext";

export const useJobs = () => useContext(JobContext);
