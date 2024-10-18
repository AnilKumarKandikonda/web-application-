from django.db import models


class Contact(models.Model):
    CT_ID = models.AutoField(primary_key=True, auto_created=True)
    CT_EMAIL = models.CharField(max_length=500, blank=False, null=False)
    CT_PHONE = models.CharField(max_length=14, blank=True, null=True)
    CT_WEBSITE = models.CharField(max_length=500, blank=True, null=True)
    CT_DESCRIPTION = models.TextField(blank=True, null=True)
    CT_FIRST_NAME = models.CharField(max_length=500, blank=False, null=False)
    CT_LAST_NAME = models.CharField(max_length=100, blank=False, null=False)
    CT_CREATED = models.DateTimeField(auto_now_add=True)
    CT_TICKET_NUMBER = models.CharField(max_length=12, blank=False, null=False)
    CT_TICKET_CLOSE = models.BooleanField('Status', default=False)
    CT_TICKET_CLOSE_DATE = models.DateTimeField(null=True, blank=True)
    CT_ORGANIZATION = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        db_table = 'tblcontact'

    def __str__(self):
        return str(self.CT_TICKET_NUMBER)
