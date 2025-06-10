import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../components/helper/api";

interface Company {
  id: number;
  name: string;
  description: string;
  website: string;
  logo: string | null;
  location: string;
  employee_count: number;
  founded_year: number;
  industry: string;
  created_at: string;
  updated_at: string;
}

interface Tag {
  id: number;
  name: string;
  is_skill: boolean;
  created_at: string;
}

export interface Job {
  id: number;
  company: Company;
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary_min: string;
  salary_max: string;
  job_type: string;
  experience_level: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  posted_by: number;
}

interface JobsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Job[];
}

export function useJobs(limit = 6) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<JobsResponse>(
          `${api.baseUrl}${api.jobs.list}?format=json&limit=${limit}`
        );
        setJobs(response.data.results);
      } catch (err: any) {
        setError(err.message || "Error fetching jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [limit]);

  return { jobs, loading, error };
}
