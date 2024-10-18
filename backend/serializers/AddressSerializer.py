from rest_framework import serializers
from backend.models.UserModel import Address
from backend.serializers.UserSerializer import BaseUserSerializer


class AddressSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Address
        fields = '__all__'

    @staticmethod
    def get_user(self, obj):
        user = obj.user
        serializer = BaseUserSerializer(user, many=False)
        return serializer.data
