from rest_framework import serializers
from backend.models.UserModel import NewUser


class UserSerializer(serializers.ModelSerializer):
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = NewUser
        fields = ['_id', 'email', 'first_name', 'last_name', 'username', 'isAdmin']

    @staticmethod
    def get__id(obj):
        return obj.id

    @staticmethod
    def get_email(obj):
        return obj.email

    @staticmethod
    def get_first_name(obj):
        return obj.first_name

    @staticmethod
    def get_last_name(obj):
        return obj.last_name

    @staticmethod
    def get_USR_USERNAME(obj):
        return obj.USR_USERNAME

    @staticmethod
    def get_isAdmin(obj):
        return obj.is_staff


class BaseUserSerializer(serializers.ModelSerializer):
    _id = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = NewUser
        fields = ['_id', 'email', 'first_name', 'last_name', ]

    @staticmethod
    def get__id(obj):
        return obj.id


