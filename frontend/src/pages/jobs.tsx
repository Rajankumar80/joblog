import { useState, useEffect } from "react"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { useJobs } from "../hooks/useJobs"
import { formatSalary } from "../components/helper/formatSalary"
import { Slider } from "@/components/ui/slider"

export default function Jobs() {
    const [filters, setFilters] = useState({
        location: "",
        salaryMin: 0,
        salaryMax: 200000,  // Set a default maximum salary
        tags: "",
        postedWithin: ""
    });
    const [sortOrder, setSortOrder] = useState("recent");
    const { jobs, loading, error } = useJobs(100);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        if (jobs) {
            let filtered = jobs.filter(job => {
                const filterTags = filters.tags.toLowerCase().split(',').map(tag => tag.trim());
                return (
                    (filters.location === "" || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
                    (job.salary_min >= filters.salaryMin) &&
                    (job.salary_max <= filters.salaryMax) &&  // Use the numeric salaryMax value
                    (filters.tags === "" || filterTags.every(filterTag => 
                        job.tags.some(jobTag => 
                            jobTag.name.toLowerCase().replace(/[-\s]/g, '').includes(filterTag.replace(/[-\s]/g, ''))
                        )
                    )) &&
                    (filters.postedWithin === "" || isWithinDateRange(job.posted_date, filters.postedWithin))
                );
            });

            // Apply sorting
            filtered.sort((a, b) => {
                switch (sortOrder) {
                    case "recent":
                        return new Date(b.posted_date).getTime() - new Date(a.posted_date).getTime();
                    case "salary-high-to-low":
                        return b.salary_max - a.salary_max;
                    case "salary-low-to-high":
                        return a.salary_min - b.salary_min;
                    default:
                        return 0;
                }
            });

            setFilteredJobs(filtered);
        }
    }, [jobs, filters, sortOrder]);

    const isWithinDateRange = (postedDate, range) => {
        const now = new Date();
        const posted = new Date(postedDate);
        const diffTime = Math.abs(now.getTime() - posted.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        switch (range) {
            case "24h": return diffDays <= 1;
            case "7d": return diffDays <= 7;
            case "30d": return diffDays <= 30;
            default: return true;
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleSalaryMinChange = (value) => {
        setFilters(prev => ({ ...prev, salaryMin: value[0] }));
    };

    const handleSalaryMaxChange = (value) => {
        setFilters(prev => ({ ...prev, salaryMax: value[0] }));
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    if (loading) return <div>Loading jobs...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="container mx-auto">
               
                <div className="container mx-auto pt-0 pb-4 flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">- {filteredJobs.length} jobs found</h1>
                    <div className="flex items-center">
                        <label htmlFor="sort" className="mr-2">Sort by:</label>
                        <select
                            id="sort"
                            className="p-2 border rounded"
                            value={sortOrder}
                            onChange={handleSortChange}
                        >
                            <option value="recent">Most Recent</option>
                            <option value="salary-high-to-low">Salary (High to Low)</option>
                            <option value="salary-low-to-high">Salary (Low to High)</option>
                        </select>
                    </div>
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
                                    name="location"
                                    placeholder="Enter location"
                                    className="w-full p-2 border rounded"
                                    value={filters.location}
                                    onChange={handleFilterChange}
                                />
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">Minimum Salary</h3>
                                <Slider
                                    defaultValue={[0]}
                                    max={200000}
                                    step={1000}
                                    onValueChange={handleSalaryMinChange}
                                />
                                <p className="mt-2">Min: {formatSalary(filters.salaryMin)}</p>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">Maximum Salary</h3>
                                <Slider
                                    defaultValue={[200000]}
                                    max={200000}
                                    step={1000}
                                    onValueChange={handleSalaryMaxChange}
                                />
                                <p className="mt-2">Max: {formatSalary(filters.salaryMax)}</p>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">Tags</h3>
                                <input
                                    type="text"
                                    name="tags"
                                    placeholder="Enter tags, separated by commas"
                                    className="w-full p-2 border rounded mb-2"
                                    value={filters.tags}
                                    onChange={handleFilterChange}
                                />
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">Posted Within</h3>
                                <select 
                                    className="w-full p-2 border rounded"
                                    name="postedWithin"
                                    value={filters.postedWithin}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">Any time</option>
                                    <option value="24h">Last 24 hours</option>
                                    <option value="7d">Last 7 days</option>
                                    <option value="30d">Last 30 days</option>
                                </select>
                            </div>
                        </div>
                    </aside>

                    {/* Main content */}
                    <main className="flex-1">
                        <section>
                            <div className="container">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {filteredJobs.map((job, index) => (
                                        <Card key={index}>
                                            <CardHeader>
                                                <CardTitle>{job.title}</CardTitle>
                                                <CardDescription>{job.company.name} • {job.location}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-lg font-semibold text-primary mb-2">{formatSalary(job.salary_min)} - {formatSalary(job.salary_max)}</p>
                                                <p className="text-muted-foreground mb-4">{job.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.tags.map((tag, i) => (
                                                        <Badge key={i} variant="secondary">{tag.name}</Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                            <CardFooter className="flex justify-between items-center">
                                                <span className="text-sm text-muted-foreground">{new Date(job.posted_date).toLocaleDateString()}</span>
                                                <Button asChild>
                                                    <Link to={`/jobs/${job.id}`}>Apply Now</Link>
                                                </Button>
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
