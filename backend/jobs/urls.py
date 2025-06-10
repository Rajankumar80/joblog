from django.urls import path, include
from . import views
from rest_framework import routers, serializers, viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Company, Job, Tag
from .filter import JobFilter

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class JobSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    
    class Meta:
        model = Job
        fields = '__all__'

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = JobFilter  # ✅ use custom filterset
    search_fields = ['title', 'description', 'company__name', 'tags__name']
    ordering_fields = ['posted_date', 'salary_min', 'salary_max']



router = routers.DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'tags', TagViewSet)
router.register(r'jobs', JobViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)


urlpatterns = [
    path('', include(router.urls)),
        path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))

]