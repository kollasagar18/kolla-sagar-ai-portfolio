from django.db import models


class VisitorCount(models.Model):

    today = models.PositiveIntegerField(default=0)

    total = models.PositiveIntegerField(default=0)

    last_visit = models.DateField(auto_now=True)

    def __str__(self):
        return f"Today: {self.today} | Total: {self.total}"