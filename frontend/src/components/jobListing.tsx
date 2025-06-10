import { JobCard } from "./jobCard";
import { useJobs } from "../hooks/useJobs";
import { formatSalary } from "./helper/formatSalary";

export function JobListing() {
  const { jobs, loading, error } = useJobs(6);

  if (loading) return <div>Loading jobs...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!jobs) return <div>No jobs found.</div>;

  return (
    <section className="pb-12 max-w-8xl mx-auto">
      <h2 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-10">
        Job Listings
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company.name}
            location={job.location}
            salary={`${formatSalary(job.salary_min)} - ${formatSalary(job.salary_max)}`}
            description={job.description}
            jobType={job.job_type}
            experienceLevel={job.experience_level}
            postedDate={new Date(job.created_at).toLocaleDateString()}
            id={job.id}
          />
        ))}
      </div>
    </section>
  );
}
