import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Badge } from "./ui/badge"

interface JobCardProps {
  title: string
  company: string
  location: string
  salary?: string
  description: string
  tags: string[]
  postedDate: string
}

export function JobCard({
  title,
  company,
  location,
  salary,
  description,
  tags,
  postedDate,
}: JobCardProps) {
  return (
    <Card className="w-full max-w-2xl hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="mt-1">
              {company} • {location}
            </CardDescription>
          </div>
          {salary && (
            <Badge variant="secondary" className="text-sm">
              {salary}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Posted {postedDate}</p>
        <Button>Apply Now</Button>
      </CardFooter>
    </Card>
  )
}
