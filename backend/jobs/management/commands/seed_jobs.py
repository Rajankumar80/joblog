from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from jobs.models import Company, Job, UserProfile
from django.utils import timezone
import random

User = get_user_model()

class Command(BaseCommand):
    help = 'Seeds the database with sample jobs data'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding database...')

        # Create sample users
        self.stdout.write('Creating users...')
        
        # Create admin user
        admin_user = User.objects.create_superuser(
            username='admin',
            email='admin@example.com',
            password='admin123'
        )
        admin_user.profile.is_recruiter = True
        admin_user.profile.save()
        
        # Create regular users
        regular_users = []
        for i in range(5):
            user = User.objects.create_user(
                username=f'user{i}',
                email=f'user{i}@example.com',
                password='user123',
                first_name=f'User{i}',
                last_name='Smith'
            )
            regular_users.append(user)

        # Create recruiter users
        recruiter_users = []
        for i in range(3):
            user = User.objects.create_user(
                username=f'recruiter{i}',
                email=f'recruiter{i}@example.com',
                password='recruiter123',
                first_name=f'Recruiter{i}',
                last_name='Johnson'
            )
            user.profile.is_recruiter = True
            user.profile.save()
            recruiter_users.append(user)

        # Create sample companies
        self.stdout.write('Creating companies...')
        companies = []
        company_data = [
            {
                'name': 'Tech Innovators Inc.',
                'description': 'Leading technology company focused on innovation',
                'website': 'https://techinnovators.com',
                'location': 'San Francisco, CA',
                'employee_count': 500,
                'founded_year': 2010,
                'industry': 'Technology'
            },
            {
                'name': 'Digital Solutions Ltd',
                'description': 'Digital transformation and consulting services',
                'website': 'https://digitalsolutions.com',
                'location': 'New York, NY',
                'employee_count': 200,
                'founded_year': 2015,
                'industry': 'Consulting'
            },
            {
                'name': 'Green Energy Co',
                'description': 'Renewable energy solutions provider',
                'website': 'https://greenenergy.com',
                'location': 'Austin, TX',
                'employee_count': 300,
                'founded_year': 2012,
                'industry': 'Energy'
            }
        ]

        for data in company_data:
            company = Company.objects.create(**data)
            companies.append(company)

        # Create sample jobs
        self.stdout.write('Creating jobs...')
        job_titles = [
            'Senior Software Engineer',
            'Product Manager',
            'Data Scientist',
            'UX Designer',
            'DevOps Engineer',
            'Marketing Manager',
            'Sales Representative',
            'Project Manager'
        ]

        job_types = [
            'Full-time',
            'Part-time',
            'Contract',
            'Remote'
        ]

        experience_levels = [
            'Entry Level',
            'Mid Level',
            'Senior Level',
            'Lead'
        ]

        job_boards = [
            'linkedin.com/jobs',
            'indeed.com/jobs',
            'glassdoor.com/jobs',
            'wellfound.com/jobs',
            'stackoverflow.com/jobs'
        ]

        for _ in range(20):
            company = random.choice(companies)
            title = random.choice(job_titles)
            job_board = random.choice(job_boards)
            # Create a URL-friendly job title
            url_title = title.lower().replace(' ', '-')
            
            Job.objects.create(
                title=title,
                company=company,
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                requirements='- Bachelor\'s degree in related field\n- 5+ years of experience\n- Strong communication skills\n- Team player',
                salary_min=random.randint(50000, 80000),
                salary_max=random.randint(90000, 150000),
                location=random.choice(['San Francisco, CA', 'New York, NY', 'Austin, TX', 'Remote']),
                job_type=random.choice(job_types),
                experience_level=random.choice(experience_levels),
                posted_by=random.choice(recruiter_users),
                is_active=True,
                created_at=timezone.now(),
                apply_url=f'https://{job_board}/{company.name.lower().replace(" ", "-")}/{url_title}-{random.randint(10000, 99999)}'
            )

        self.stdout.write(self.style.SUCCESS('Successfully seeded database!'))
