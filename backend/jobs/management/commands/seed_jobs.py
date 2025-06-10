from django.core.management.base import BaseCommand
from jobs.models import Company, Job, Tag
from django.utils import timezone
import random

class Command(BaseCommand):
    help = "Seed the database with dummy job listings"

    def handle(self, *args, **kwargs):
        tags = ['Python', 'Django', 'Remote', 'Full-time', 'Backend', 'AI', 'Frontend', 'DevOps', 'Data Science', 'Machine Learning']
        tag_objs = [Tag.objects.get_or_create(name=tag)[0] for tag in tags]

        companies = [
            {
                'name': "Joblog Inc",
                'description': "Leading job platform",
                'website': "https://joblog.com",
                'location': "New York, NY",
                'employee_count': 100,
                'founded_year': 2020,
                'industry': "Tech",
            },
            {
                'name': "TechGiant Corp",
                'description': "Innovative tech solutions",
                'website': "https://techgiant.com",
                'location': "San Francisco, CA",
                'employee_count': 5000,
                'founded_year': 2005,
                'industry': "Technology",
            },
            {
                'name': "StartupX",
                'description': "Disruptive startup",
                'website': "https://startupx.io",
                'location': "Austin, TX",
                'employee_count': 50,
                'founded_year': 2022,
                'industry': "Software",
            },
            {
                'name': "DataDriven LLC",
                'description': "Data-focused solutions",
                'website': "https://datadriven.com",
                'location': "Boston, MA",
                'employee_count': 200,
                'founded_year': 2018,
                'industry': "Data Analytics",
            },
        ]

        company_objs = [Company.objects.get_or_create(**company)[0] for company in companies]

        for i in range(20):
            company = random.choice(company_objs)
            posted_date = timezone.now() - timezone.timedelta(days=random.randint(1, 60))
            deadline = posted_date + timezone.timedelta(days=random.randint(14, 90))
            
            job = Job.objects.create(
                title=f"Software Engineer {i+1}",
                company=company,
                description="Build cool stuff with cutting-edge technologies.",
                location=random.choice(["Remote", company.location, "Hybrid"]),
                salary_min=random.randint(50000, 100000),
                salary_max=random.randint(100000, 200000),
                posted_date=posted_date,
                deadline=deadline,
                is_active=True,
                application_url=f"https://{company.website}/apply"
            )
            job.tags.set(random.sample(tag_objs, k=random.randint(2, 5)))

        self.stdout.write(self.style.SUCCESS("Dummy jobs created with various companies and dates."))
