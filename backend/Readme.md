# Commands to run

```
python manage.py makemigrations
python manage.py migrate    
python manage.py runserver 9000
```


# Dummy Data

```
python manage.py seed_jobs
```

# If error that jobs_user not found

- delete all migrations and db
- execute

```
python manage.py makemigrations jobs

python manage.py migrate auth
python manage.py migrate contenttypes
python manage.py migrate
```