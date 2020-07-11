import os
import datetime
from datetime import date, datetime
import platform
import socket
import os
import psutil
import requests


class VPSData(object):
    def __init__(self):
        self.vpsName = ""
        self.cpuUsage = 0
        self.memoryUsage = 0
        self.storageUsage = 0
        self.processesList = []
        self.year = 0
        self.month = 0
        self.date = 0
        self.hour = 0

    def __repr__(self):
        return str({"vpsName": self.vpsName, "cpuUsage": self.cpuUsage, "memoryUsage": self.memoryUsage, "storageUsage": self.storageUsage, "year": self.year, "month": self.month, "date": self.date, "hour": self.hour})

    def getAllData(self):
      #  self.getAllProcesses()
        self.vpsName = self.getVPSName()
        self.cpuUsage = self.getCPUUsage()
        self.memoryUsage = self.getMemoryUsage()
        self.storageUsage = self.getStorageUsage()
        self.year = self.getCurrentYear()
        self.month = self.getCurrentMonth()
        self.date = self.getCurrentDate()

    def getVPSName(self):
        return socket.gethostname()

    def getCPUUsage(self):
        return psutil.cpu_percent()

    def getMemoryUsage(self):
        memInfo = psutil.virtual_memory()
        return memInfo.percent

    def getStorageUsage(self):
        diskUsage = psutil.disk_usage("/")
        return diskUsage.percent

   # def getAllProcesses(self):
      #  allProcesses = psutil.process_iter(['pid', 'name', 'username'])
      #  for process in allProcesses:
      #      self.processesList.append(process.info)

    def getCurrentYear(self):
        now = date.today()
        return now.year

    def getCurrentMonth(self):
        now = date.today()
        return now.month

    def getCurrentDate(self):
        now = date.today()
        return now.day

    def getCurrentHour(self):
        now = datetime.now()
        return now.hour


nevinVPS = VPSData()
nevinVPS.getAllData()


filteredVPSData = {"vpsName": nevinVPS.vpsName, "cpuUsage": nevinVPS.cpuUsage, "memoryUsage": nevinVPS.memoryUsage,
                   "storageUsage": nevinVPS.storageUsage, "year": nevinVPS.year, "month": nevinVPS.month, "date": nevinVPS.date, "hour": nevinVPS.hour}
# print(filteredVPSData)
sentVPSData = requests.post(
    "http://localhost:4823/statusAPI", data=filteredVPSData
)

print(sentVPSData)
