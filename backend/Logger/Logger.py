import os
from datetime import datetime
from os.path import exists


class Logger:
    @staticmethod
    def __checkDirectory():
        try:
            directory = 'c:/dignlearn/logs'
            if not os.path.isdir(directory):
                os.makedirs(directory)
            return directory
        except Exception as e:
            return

    @staticmethod
    def __writeToFile(file, message, fileExists):
        try:
            with open(file, 'a+', encoding='utf-8') as f:
                if not fileExists:
                    f.write('*****************************************\n')
                    f.write('*****     LOG FILE: ' + str(datetime.today()) + "\n")
                    f.write('*****************************************\n\n')
                f.write(f'{datetime.now().strftime("%Y/%m/%d, %H:%M:%S")} : {message}  \n')
        except Exception as e:
            pass

    @classmethod
    def writeIntoEventLogFile(cls, message):
        try:
            file = "{0}/dignlearnEventlog{1}.txt".format(cls.__checkDirectory(), datetime.today().strftime('%Y%m%d'))
            fileExists = exists(file)
            cls.__writeToFile(file, message, fileExists)
        except Exception as e:
            pass

    @classmethod
    def writeIntoErrorLogFile(cls, message):
        try:
            file = "{0}/dignlearnErrorlog{1}.txt".format(cls.__checkDirectory(), datetime.today().strftime('%Y%m%d'))
            fileExists = exists(file)
            cls.__writeToFile(file, message, fileExists)
        except Exception as e:
            pass

    @classmethod
    def writeIntoInfoLogFile(cls, message):
        try:
            file = "{0}/dignlearnInfolog{1}.txt".format(cls.__checkDirectory(), datetime.today().strftime('%Y%m%d'))
            fileExists = exists(file)
            cls.__writeToFile(file, message, fileExists)
        except Exception as e:
            pass
