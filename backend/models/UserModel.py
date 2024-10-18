from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
import os
import uuid


# Create your models here.

def user_resume_path(instance, filename):
    # File will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    print(instance.USR_GUID, filename)
    upload_path = os.path.join(str(instance.USR_GUID), filename)
    # print(upload_path)
    # directory = os.path.dirname(upload_path)
    # print(directory)
    # if not os.path.exists(directory):
    #     os.makedirs(directory)
    return f"{upload_path}"


class CustomAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password, **other_fields):
        if not email:
            raise ValueError(_('you must provide an email address'))
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name,
                          last_name=last_name, **other_fields)
        other_fields.setdefault('is_active', True)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, first_name, last_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff = True')
        if other_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must be assigned to is_superuser = True')

        return self.create_user(email, first_name, last_name, password, **other_fields)


class NewUser(AbstractUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    """
        HIRING: 123
        LOOKING FOR JOB/ OPEN TO WORK: 124
        FREELANCER: 125
        NO OPTION SELECTED: 121
    """
    USR_HLF = models.IntegerField(default=121)
    USR_EMAIL_VERIFIED = models.BooleanField(default=False)
    USR_MESSAGE_REQUEST = models.IntegerField(null=True, blank=True)
    USR_PHONE = models.CharField(max_length=12, null=True, blank=True)
    USR_POSITION_TITLE = models.CharField(max_length=255, null=True, blank=True)
    USR_DATEOFBIRTH = models.DateField(null=True, blank=True)
    USR_GENDER = models.IntegerField(default=-1, null=False, blank=False)
    USR_LOCATION_REQUEST = models.BooleanField(default=False)
    USR_JOB_POST_LIMIT = models.IntegerField(default=2)
    USR_GUID = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    """
        THIS IS TO WHETHER USER MADE ANY PAYMENT FOR REVIEWING THE RESUME OR JOBS
    """
    USR_RESUME_SUB = models.BooleanField(default=False)

    """
        THIS WILL DETERMINE WHETHER HE CAN POST A JOB OR NOT
    """
    USR_JOB_CHECK = models.BooleanField(default=True)
    USR_NEWS_SUBSCRIPTION = models.BooleanField(default=False)
    USR_RESUME = models.FileField(upload_to=user_resume_path)
    USR_WEBSITE = models.CharField(max_length=50, null=True, blank=True)
    USR_OTHER_DETAILS = models.TextField(blank=True, null=True)
    USR_TIMEZONE = models.CharField(max_length=100, blank=True, null=True)
    TOKEN = models.TextField(null=True, blank=True)
    USR_OTHER_PREFERENCE = models.TextField(null=True, blank=True)
    USR_JOB_PREFERENCES = models.CharField(max_length=100, blank=True, null=True)
    USR_ACTIVE = models.BooleanField("active",default=False)
    USR_MONGO_STORED = models.BooleanField("mongo stored", default=False)
    USR_NOTES = models.TextField(null=True, blank=True)
    objects = CustomAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    class Meta:
        db_table = 'tbluser'

    def __str__(self):
        return str(self.id)


class Address(models.Model):
    USR_ADDRESS_ID = models.AutoField(primary_key=True, auto_created=True)
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE, null=False, blank=False)
    USR_ADDRESS = models.CharField(max_length=400, null=True, blank=True)
    USR_UNIT = models.CharField(max_length=20)
    USR_CITY = models.IntegerField(null=True, blank=True)
    USR_STATE = models.IntegerField(null=True, blank=True)
    USR_COUNTRY = models.IntegerField(null=False, blank=False)
    USR_POSTAL = models.CharField(max_length=10, blank=True, null=True)
    """
        USR_ADRESS_TYPE DEFINES THE SHIPPING ADDRESS OR THE BILLING ADDRESS OF THE USER
        12 - shipping address
        13 - billing address
    """
    USR_ADDRESS_TYPE = models.IntegerField(null=True, blank=True)
    CREATED_DATE = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'tbladdress'

    def __str__(self):
        return self.USR_ADDRESS_ID


class Department(models.Model):
    DEPARTMENT_ID = models.AutoField(primary_key=True, auto_created=True, default=500)
    DEPARTMENT_NAME = models.CharField(max_length=150, null=False, blank=False)
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE, null=True, blank=True)
    CREATED_DATE = models.DateTimeField(auto_now_add=True)
    CREATED_BY = models.IntegerField(null=True, blank=True)

    class Meta:
        db_table = 'tbldepartment'

    def __str__(self):
        return self.DEPARTMENT_NAME


class Experience(models.Model):
    USR_EXP_ID = models.AutoField(primary_key=True, auto_created=True)
    USR_EXP_POSITION = models.CharField(max_length=150, null=False, blank=False)
    USR_EXP_DEPARTMENT = models.ForeignKey(Department, on_delete=models.CASCADE, null=True, blank=True)
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE, null=False, blank=False)
    USR_EXP_SKILLS = models.TextField(blank=True, null=True)
    USR_EXP_DESCRIPTION = models.TextField(blank=True, null=True)
    USR_EXP_START = models.CharField(max_length=50, null=True, blank=True)
    USR_EXP_END = models.CharField(max_length=50, null=True, blank=True)
    USR_EXP_COUNTRY = models.IntegerField(null=False, blank=False)
    USR_EXP_STATE = models.IntegerField(null=False, blank=False)
    USR_EXP_POSTAL = models.CharField(max_length=10, blank=True, null=True)
    """
        HIRING: 123
        LOOKING FOR JOB/ OPEN TO WORK: 124
        FREELANCER: 125
        NO OPTION SELECTED: 121
    """
    USR_EXP_TYPE = models.IntegerField(default=121)
    USR_CREATED = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'tbluser_experience'

    def __str__(self):
        return self.USR_EXP_ID


class Education(models.Model):
    USR_EDU_ID = models.AutoField(primary_key=True, auto_created=True)
    USR_EDU_COLLEGE = models.CharField(max_length=255, null=False, blank=False)
    USR_EDU_COURSE_TYPE = models.CharField(max_length=150, null=True, blank=True)
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE, null=False, blank=False)
    USR_EDU_START_DATE = models.CharField(max_length=50, null=True, blank=True)
    USR_EDU_END_DATE = models.CharField(max_length=50, null=True, blank=True)
    USR_EDU_DESCRIPTION = models.TextField(null=True, blank=True)
    USR_EDU_COURSE_NAME = models.CharField(max_length=255, null=False, blank=False)
    USR_EDU_LOCATION = models.CharField(max_length=155, null=True, blank=True)
    USR_EDU_CREATED = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'tbluser_education'

    def __str__(self):
        return self.USR_EDU_ID


class Certification(models.Model):
    USR_CERT_ID = models.AutoField(primary_key=True, auto_created=True)
    USR_CERT_NAME = models.CharField(max_length=300, null=False, blank=False)
    USR_CERT_LICENSE = models.CharField(max_length=255, null=True, blank=True)
    """
        CERTIFICATE ISSUE AND EXPIRY CAN BE STORED IN STRING.
    """
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE, null=False, blank=False)
    USR_CERT_ISSUE = models.CharField(max_length=50, null=True, blank=True)
    USR_CERT_EXPIRY = models.CharField(max_length=50, null=True, blank=True)
    USR_CERT_DESCRIPTION = models.TextField(null=True, blank=True)
    USR_CREATED = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'tbluser_certification'

    def __str__(self):
        return self.USR_CERT_ID


