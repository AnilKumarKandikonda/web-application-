from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from backend.serializers.UserSerializer import UserSerializer
from backend.models.UserModel import NewUser


class AuthSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    requestToken = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = NewUser
        fields = ['_id', 'email', 'first_name', 'last_name', 'token', 'username', 'requestToken']

    @staticmethod
    def get_token(obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

    @staticmethod
    def get_requestToken(obj):
        token = RefreshToken.for_user(obj)
        return str(token)


class LoginSerializer(serializers.Serializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    email = serializers.EmailField()
    password = serializers.CharField(style={"input_type": "password"}, write_only=True)


