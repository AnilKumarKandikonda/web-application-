from django.db import models
import os

from backend.models import NewUser


def user_resume_path(instance, filename):
    upload_path = os.path.join("resumes", str(instance.user.USR_GUID), filename)
    return f"{upload_path}"


class Resume(models.Model):
    RS_ID = models.AutoField(primary_key=True, auto_created=True)
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE, null=False, blank=False)
    RS_RESUME = models.FileField(upload_to=user_resume_path)
    RS_CREATED = models.DateTimeField(auto_now_add=True)
    RS_REVIEW = models.BooleanField('Status', default=False)
    RS_REVIEW_COUNT = models.IntegerField(default=1)
    RS_NOTES = models.TextField(null=True, blank=True)
    RS_INITIAL_REVIEW = models.BooleanField('initial review', default=False)
    RS_UPDATED = models.DateTimeField(null=True, blank=True)
    RS_REVIEW_COMPLETED = models.BooleanField('review completed', default=False)

    class Meta:
        db_table = 'tblresume'

    def __str__(self):
        return str(self.RS_ID)
