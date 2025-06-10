import { Navbar1 as Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@radix-ui/react-separator"

export default function Jobs() {
    const jobs = [
        {
            title: "Senior Frontend Developer",
            company: "Acme Inc",
            location: "San Francisco, CA",
            salary: "$140k - $180k",
            description: "We're looking for an experienced frontend developer to join our growing team.",
            tags: ["React", "TypeScript", "Next.js"],
            postedDate: "2d ago"
        },
        {
            title: "Backend Engineer",
            company: "TechCorp",
            location: "Remote",
            salary: "$130k - $160k",
            description: "Join us in building scalable backend services using modern technologies.",
            tags: ["Node.js", "Python", "AWS"],
            postedDate: "5d ago"
        },
        {
            title: "Full Stack Developer",
            company: "StartupCo",
            location: "New York, NY",
            salary: "$120k - $150k",
            description: "Looking for a full stack developer who can work across our entire tech stack.",
            tags: ["React", "Node.js", "MongoDB"],
            postedDate: "1w ago"
        }
        ,
        {
            title: "Senior Frontend Developer",
            company: "Acme Inc",
            location: "San Francisco, CA",
            salary: "$140k - $180k",
            description: "We're looking for an experienced frontend developer to join our growing team.",
            tags: ["React", "TypeScript", "Next.js"],
            postedDate: "2d ago"
        },
        {
            title: "Backend Engineer",
            company: "TechCorp",
            location: "Remote",
            salary: "$130k - $160k",
            description: "Join us in building scalable backend services using modern technologies.",
            tags: ["Node.js", "Python", "AWS"],
            postedDate: "5d ago"
        },
        {
            title: "Full Stack Developer",
            company: "StartupCo",
            location: "New York, NY",
            salary: "$120k - $150k",
            description: "Looking for a full stack developer who can work across our entire tech stack.",
            tags: ["React", "Node.js", "MongoDB"],
            postedDate: "1w ago"
        }
        ,
        {
            title: "Senior Frontend Developer",
            company: "Acme Inc",
            location: "San Francisco, CA",
            salary: "$140k - $180k",
            description: "We're looking for an experienced frontend developer to join our growing team.",
            tags: ["React", "TypeScript", "Next.js"],
            postedDate: "2d ago"
        },
        {
            title: "Backend Engineer",
            company: "TechCorp",
            location: "Remote",
            salary: "$130k - $160k",
            description: "Join us in building scalable backend services using modern technologies.",
            tags: ["Node.js", "Python", "AWS"],
            postedDate: "5d ago"
        },
        {
            title: "Full Stack Developer",
            company: "StartupCo",
            location: "New York, NY",
            salary: "$120k - $150k",
            description: "Looking for a full stack developer who can work across our entire tech stack.",
            tags: ["React", "Node.js", "MongoDB"],
            postedDate: "1w ago"
        }
        ,
        {
            title: "Senior Frontend Developer",
            company: "Acme Inc",
            location: "San Francisco, CA",
            salary: "$140k - $180k",
            description: "We're looking for an experienced frontend developer to join our growing team.",
            tags: ["React", "TypeScript", "Next.js"],
            postedDate: "2d ago"
        },
        {
            title: "Backend Engineer",
            company: "TechCorp",
            location: "Remote",
            salary: "$130k - $160k",
            description: "Join us in building scalable backend services using modern technologies.",
            tags: ["Node.js", "Python", "AWS"],
            postedDate: "5d ago"
        },
        {
            title: "Full Stack Developer",
            company: "StartupCo",
            location: "New York, NY",
            salary: "$120k - $150k",
            description: "Looking for a full stack developer who can work across our entire tech stack.",
            tags: ["React", "Node.js", "MongoDB"],
            postedDate: "1w ago"
        }
        ,
        {
            title: "Senior Frontend Developer",
            company: "Acme Inc",
            location: "San Francisco, CA",
            salary: "$140k - $180k",
            description: "We're looking for an experienced frontend developer to join our growing team.",
            tags: ["React", "TypeScript", "Next.js"],
            postedDate: "2d ago"
        },
        {
            title: "Backend Engineer",
            company: "TechCorp",
            location: "Remote",
            salary: "$130k - $160k",
            description: "Join us in building scalable backend services using modern technologies.",
            tags: ["Node.js", "Python", "AWS"],
            postedDate: "5d ago"
        },
        {
            title: "Full Stack Developer",
            company: "StartupCo",
            location: "New York, NY",
            salary: "$120k - $150k",
            description: "Looking for a full stack developer who can work across our entire tech stack.",
            tags: ["React", "Node.js", "MongoDB"],
            postedDate: "1w ago"
        }
    ]

    return (
        <>
            <div className="container mx-auto">
               
                <div className="container mx-auto pt-0 pb-4">
                    <h1 className="text-2xl font-semibold text-right">- {jobs.length} jobs found</h1>
                </div>
                <div className="flex flex-col lg:flex-row relative sm:mx-auto" >
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 pr-0 lg:pr-8 mb-8 lg:mb-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
                        <h2 className="text-xl font-semibold mb-4">Filters</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium mb-2">Location</h3>
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">Salary Range</h3>
                                <div className="flex space-x-2">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        className="w-1/2 p-2 border rounded"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        className="w-1/2 p-2 border rounded"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">Tags</h3>
                                <input
                                    type="text"
                                    placeholder="Search tags"
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">React</Badge>
                                    <Badge variant="outline">Node.js</Badge>
                                    <Badge variant="outline">TypeScript</Badge>
                                    {/* Add more tags as needed */}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">Posted Within</h3>
                                <select className="w-full p-2 border rounded">
                                    <option>Any time</option>
                                    <option>Last 24 hours</option>
                                    <option>Last 7 days</option>
                                    <option>Last 30 days</option>
                                </select>
                            </div>
                        </div>
                    </aside>

                    {/* Main content */}
                    <main className="flex-1">
                        <section>
                            <div className="container">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {jobs.map((job, index) => (
                                        <Card key={index}>
                                            <CardHeader>
                                                <CardTitle>{job.title}</CardTitle>
                                                <CardDescription>{job.company} • {job.location}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-lg font-semibold text-primary mb-2">{job.salary}</p>
                                                <p className="text-muted-foreground mb-4">{job.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.tags.map((tag, i) => (
                                                        <Badge key={i} variant="secondary">{tag}</Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                            <CardFooter className="flex justify-between items-center">
                                                <span className="text-sm text-muted-foreground">{job.postedDate}</span>
                                                <Button>Apply Now</Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}
