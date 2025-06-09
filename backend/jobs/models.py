from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Company(models.Model):
    name = models.CharField(max_length=500)
    description = models.TextField(null=True, blank=True)
    website = models.URLField(null=True, blank=True)
    logo = models.ImageField(upload_to='logos/', null=True, blank=True)
    location = models.TextField()
    employee_count = models.IntegerField(null=True, blank=True)
    founded_year = models.IntegerField(null=True, blank=True)
    industry = models.CharField(max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Companies"
        ordering = ['-created_at']


class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)
    is_skill = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Job(models.Model):
    JOB_TYPES = [
        ('FT', 'Full-time'),
        ('PT', 'Part-time'),
        ('CT', 'Contract'),
        ('IN', 'Internship'),
        ('FR', 'Freelance'),
    ]

    WORK_MODES = [
        ('REMOTE', 'Remote'),
        ('ONSITE', 'On-site'),
        ('HYBRID', 'Hybrid'),
    ]

    title = models.CharField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='jobs')
    description = models.TextField()
    location = models.CharField(max_length=255)
    salary_min = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    salary_max = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    job_type = models.CharField(max_length=2, choices=JOB_TYPES, default='FT')
    work_mode = models.CharField(max_length=10, choices=WORK_MODES, default='ONSITE')
    application_url = models.URLField(help_text="External link where users will apply.", null=True, blank=True)
    posted_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='posted_jobs')
    posted_date = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    tags = models.ManyToManyField(Tag, related_name='jobs', blank=True)

    def __str__(self):
        return f"{self.title} at {self.company.name}"

    class Meta:
        ordering = ['-posted_date']