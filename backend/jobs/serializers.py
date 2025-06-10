from django.contrib.auth.models import Group, User
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import UserProfile, Company, Job

User = get_user_model()


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('is_recruiter',)


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(required=False)
    password = serializers.CharField(write_only=True)
    is_recruiter = serializers.BooleanField(write_only=True, required=False, default=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'profile', 'is_recruiter')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        is_recruiter = validated_data.pop('is_recruiter', False)
        user = User.objects.create_user(**validated_data)
        user.profile.is_recruiter = is_recruiter
        user.profile.save()
        return user


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class JobSerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    
    class Meta:
        model = Job
        fields = '__all__'
