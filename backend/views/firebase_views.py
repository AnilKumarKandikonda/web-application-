from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import backend.firebase.firebase_initialize  # Import the Firebase initialization code
from firebase_admin import db


@api_view(['GET'])
def getCountriesList(request):
    try:
        ref = db.reference('/countries')
        data = ref.get()
        if data:
            result = [{"name": item["name"], "phone_code": item["phone_code"], "id": item["id"], 'iso3': item['iso3'],
                       'iso2': item['iso2']} for item in
                      data.values()]
            return Response({'message': result, 'status': status.HTTP_200_OK})
        else:
            return Response({'message': 'Error Fetching Countries.', 'status': status.HTTP_400_BAD_REQUEST})
    except Exception as e:
        return Response({'message': 'Error Fetching Countries.', 'status': status.HTTP_400_BAD_REQUEST})


@api_view(['GET'])
def getStateList(request):
    countryId = request.data
    try:
        ref = db.reference('/states/' + str(countryId))
        data = ref.get()
        if data:
            result = [item for item in data.values()]
            return Response({'message': result, 'status': status.HTTP_200_OK})
        else:
            return Response({'message': 'Error Fetching Countries.', 'status': status.HTTP_400_BAD_REQUEST})
    except Exception as e:
        return Response({'message': 'Error Fetching Countries.', 'status': status.HTTP_400_BAD_REQUEST})


@api_view(['GET'])
def getCityList(request):
    countryId = request.data.get('countryId')
    stateId = request.data.get('stateId')
    try:
        ref = db.reference('/cities/' + str(countryId)+"/"+str(stateId))
        data = ref.get()
        if data:
            result = [item for item in data.values()]
            return Response({'message': result, 'status': status.HTTP_200_OK})
        else:
            return Response({'message': 'Error Fetching Countries.', 'status': status.HTTP_400_BAD_REQUEST})
    except Exception as e:
        return Response({'message': 'Error Fetching Countries.', 'status': status.HTTP_400_BAD_REQUEST})


