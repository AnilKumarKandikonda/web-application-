from rest_framework import serializers

from backend.DataLayer.general import GeneralDataLayer
from backend.models.ResumeModel import Resume
from backend.serializers.UserSerializer import BaseUserSerializer
import os


class ResumeSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    RS_UPDATED = serializers.SerializerMethodField(read_only=True)
    RS_CREATED = serializers.SerializerMethodField(read_only=True)
    RS_RESUME = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Resume
        fields = '__all__'

    @staticmethod
    def get_user(obj):
        user = obj.user
        serializer = BaseUserSerializer(user, many=False)
        return serializer.data

    @staticmethod
    def get_RS_UPDATED(obj):
        userTimeZone = obj.user.USR_TIMEZONE
        date = obj.RS_UPDATED
        return GeneralDataLayer.convertUserTimeZone(userTimeZone, date)

    @staticmethod
    def get_RS_CREATED(obj):
        userTimeZone = obj.user.USR_TIMEZONE
        date = obj.RS_CREATED
        return GeneralDataLayer.convertUserTimeZone(userTimeZone, date)

    @staticmethod
    def get_RS_RESUME(obj):
        if obj.RS_RESUME:
            print('-----------------------------')
            print(obj.RS_RESUME.name)
            return os.path.basename(obj.RS_RESUME.name)
        return None
