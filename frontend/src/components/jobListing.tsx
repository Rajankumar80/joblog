import { JobCard } from "./jobCard";
import { useJobs } from "../hooks/useJobs";

function formatSalary(num: string | number) {
    const n = typeof num === "string" ? parseFloat(num) : num;
    if (isNaN(n)) return "";
  
    if (n >= 1_000_000) {
      return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (n >= 1_000) {
      return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return n.toString();
  }

  
export function JobListing() {
  const { jobs, loading, error } = useJobs(6);

  if (loading) return <div>Loading jobs...</div>;
  if (error) return <div>Error: {error}</div>;

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
            tags={job.tags.map((tag) => tag.name)}
            postedDate={new Date(job.posted_date).toLocaleDateString()}
          />
        ))}
      </div>
    </section>
  );
}
