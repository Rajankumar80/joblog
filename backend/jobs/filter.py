import django_filters
from .models import Job

class JobFilter(django_filters.FilterSet):
    tags__name = django_filters.CharFilter(field_name='tags__name', lookup_expr='icontains')
    company__name = django_filters.CharFilter(field_name='company__name', lookup_expr='icontains')
    location = django_filters.CharFilter(lookup_expr='icontains')
    job_type = django_filters.CharFilter(lookup_expr='exact')
    work_mode = django_filters.CharFilter(lookup_expr='exact')

    class Meta:
        model = Job
        fields = []  # You define them above manually
