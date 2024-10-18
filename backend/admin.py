from django.contrib import admin

# Register your models here.
from backend import models

admin.site.register(models.Contact)
admin.site.register(models.NewUser)
admin.site.register(models.Experience)
admin.site.register(models.Education)
admin.site.register(models.Certification)
admin.site.register(models.Address)
admin.site.register(models.Department)
admin.site.register(models.Resume)


