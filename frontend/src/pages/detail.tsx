import { useParams } from "react-router-dom";
import { useJob } from "../hooks/useJob";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { formatSalary } from "../components/helper/formatSalary";


export default function JobDetails() {
  const { id } = useParams();
  const { job, loading, error } = useJob(Number(id));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!job) return <div>Job not found</div>;

      return (
   
    <div className="container mx-auto py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-3xl">{job.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 mt-2">
                  <span>{job.company.name}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.work_mode}</span>
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">
                    {formatSalary(job.salary_min)} - {formatSalary(job.salary_max)}
                </div>
                <div className="text-sm text-muted-foreground">{job.job_type}</div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Job Details */}
          <div className="col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{job.description}</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <Badge key={tag.id} variant="secondary">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Company Info */}
          <div className="col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Company Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">About</h3>
                  <p className="text-sm text-muted-foreground">{job.company.description}</p>
                </div>
                <div>
                  <h3 className="font-medium">Industry</h3>
                  <p className="text-sm text-muted-foreground">{job.company.industry}</p>
                </div>
                <div>
                  <h3 className="font-medium">Company Size</h3>
                  <p className="text-sm text-muted-foreground">{job.company.employee_count} employees</p>
                </div>
                <div>
                  <h3 className="font-medium">Founded</h3>
                  <p className="text-sm text-muted-foreground">{job.company.founded_year}</p>
                </div>
                <div>
                  <h3 className="font-medium">Website</h3>
                  <a href={job.company.website} className="text-sm text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {job.company.website}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Button className="w-full" asChild>
                  <a 
                    href={job.application_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Application deadline: {new Date(job.deadline).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
