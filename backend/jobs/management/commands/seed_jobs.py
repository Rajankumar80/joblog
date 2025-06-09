from django.core.management.base import BaseCommand
from jobs.models import Company, Job, Tag
from django.utils import timezone
import random

class Command(BaseCommand):
    help = "Seed the database with dummy job listings"

    def handle(self, *args, **kwargs):
        tags = ['Python', 'Django', 'Remote', 'Full-time', 'Backend', 'AI']
        tag_objs = [Tag.objects.get_or_create(name=tag)[0] for tag in tags]

        company, _ = Company.objects.get_or_create(
            name="Joblog Inc",
            defaults={
                'description': "Leading job platform",
                'website': "https://joblog.com",
                'location': "New York, NY",
                'employee_count': 100,
                'founded_year': 2020,
                'industry': "Tech",
            }
        )

        for i in range(10):
            job = Job.objects.create(
                title=f"Software Engineer {i+1}",
                company=company,
                description="Build cool stuff with Python & Django.",
                location="Remote",
                salary_min=random.randint(50000, 80000),
                salary_max=random.randint(80000, 120000),
                deadline=timezone.now() + timezone.timedelta(days=30),
                is_active=True,
                application_url="https://joblog.com/apply"
            )
            job.tags.set(random.sample(tag_objs, k=2))

        self.stdout.write(self.style.SUCCESS("Dummy jobs created."))
