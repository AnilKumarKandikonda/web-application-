from pymongo import MongoClient
from django.conf import settings

client = MongoClient(settings.MONGO_DB_URL)
db = client['projectb']


class MongoDBLayer:

    @staticmethod
    def storeUserToDB(data) -> bool:
        try:
            print(data)
            users_collection = db['Users']
            users_collection.insert_one(data)
            return True
        except Exception as e:
            print(e)
            return False
