import { JobCard } from "./jobCard";

interface Job {
    title: string;
    company: string;
    location: string;
    salary?: string;
    description: string;
    tags: string[];
    postedDate: string;
}

const jobs: Job[] = [
    {
        title: "Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        salary: "$150k - $200k",
        description: "We are looking for a software engineer with 3+ years of experience in React and Node.js to join our dynamic team.",
        tags: ["React", "Node.js", "TypeScript"],
        postedDate: "2d ago"
    },
    {
        title: "Frontend Developer",
        company: "Meta",
        location: "Remote",
        salary: "$120k - $180k",
        description: "Join our team to build the next generation of social experiences using cutting-edge web technologies.",
        tags: ["React", "JavaScript", "CSS"],
        postedDate: "5d ago"
    },
    {
        title: "Full Stack Developer",
        company: "Netflix",
        location: "Los Angeles, CA",
        salary: "$140k - $190k",
        description: "Looking for a full stack developer to help build and maintain our streaming platform infrastructure.",
        tags: ["React", "Node.js", "AWS"],
        postedDate: "1w ago"
    }
    ,
    {
        title: "Full Stack Developer",
        company: "Netflix",
        location: "Los Angeles, CA",
        salary: "$140k - $190k",
        description: "Looking for a full stack developer to help build and maintain our streaming platform infrastructure.",
        tags: ["React", "Node.js", "AWS"],
        postedDate: "1w ago"
    }
    ,
    {
        title: "Full Stack Developer",
        company: "Netflix",
        location: "Los Angeles, CA",
        salary: "$140k - $190k",
        description: "Looking for a full stack developer to help build and maintain our streaming platform infrastructure.",
        tags: ["React", "Node.js", "AWS"],
        postedDate: "1w ago"
    }
    ,
    {
        title: "Full Stack Developer",
        company: "Netflix",
        location: "Los Angeles, CA",
        salary: "$140k - $190k",
        description: "Looking for a full stack developer to help build and maintain our streaming platform infrastructure.",
        tags: ["React", "Node.js", "AWS"],
        postedDate: "1w ago"
    }
];

export function JobListing() {
    return (
        <section className="pb-12 max-w-8xl mx-auto">
            <h2 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-10">Job Listings</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job, index) => (
                    <JobCard
                        key={index}
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        salary={job.salary}
                        description={job.description}
                        tags={job.tags}
                        postedDate={job.postedDate}
                    />
                ))}
            </div>
        </section>
    );
}
