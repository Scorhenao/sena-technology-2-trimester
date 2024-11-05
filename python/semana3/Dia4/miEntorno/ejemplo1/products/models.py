from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=255, unique=True)
    price = models.FloatField()
    stock = models.IntegerField()
    description = models.TextField()
    image = models.ImageField(upload_to='../app/static/images/products/car.webp', null=True, blank=True)
    status = models.BooleanField(default=True)
    

    def __str__(self):
        return self.title