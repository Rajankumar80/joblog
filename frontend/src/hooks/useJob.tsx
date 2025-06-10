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
    tags: Tag[];
    title: string;
    description: string;
    location: string;
    salary_min: string;
    salary_max: string;
    job_type: string;
    work_mode: string;
    application_url: string;
    posted_date: string;
    deadline: string;
    is_active: boolean;
    is_featured: boolean;
    posted_by: string | null;
}

export function useJob(id: number) {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [job, setJob] = useState<Job | null>(null);

    useEffect(() => {
        const fetchJob = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<Job>(
                    `${api.baseUrl}${api.jobs.detail(id)}`
                );
                setJob(response.data);
            } catch (err: any) {
                setError(err.message || "Error fetching job");
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [id]);

    return { job, loading, error };
}
