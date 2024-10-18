from typing import Any

import pytz


class GeneralDataLayer:
    @staticmethod
    def convertUserTimeZone(userTimeZone, datetime) -> str:
        if datetime is not None and datetime.tzinfo is None:
            datetime = pytz.UTC.localize(datetime)
        user_tz = pytz.timezone(userTimeZone)
        converted_time = datetime.astimezone(user_tz)
        return converted_time.strftime('%Y-%m-%d %H:%M %p') if converted_time else None

    @staticmethod
    def getResumeBaseFileName(resumeFilename) -> Any | None:
        if resumeFilename is not None and resumeFilename != '':
            print(type(resumeFilename))
            filename = resumeFilename.split('/')
            return filename[2]
        return None
