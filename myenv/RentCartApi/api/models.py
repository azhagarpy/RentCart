from django.db import models
from datetime import datetime
import os


def imgsave(request,filename):
    old_filename=filename
    ctime=datetime.now()
    new_filename=f'{ctime}{old_filename}'
    return os.path.join('images/profile_images/',new_filename)


def product_thumbnail_save(request,filename):
    old_filename=filename
    ctime=datetime.now()
    new_filename=f'{ctime}{old_filename}'
    return os.path.join('images/product_thumbnail/',new_filename)

def product_image_save(request,filename):
    old_filename=filename
    ctime=datetime.now()
    new_filename=f'{ctime}{old_filename}'
    return os.path.join('images/product_images/',new_filename)

def categorey_image_save(request,filename):
    old_filename=filename
    ctime=datetime.now()
    new_filename=f'{ctime}{old_filename}'
    return os.path.join('images/categorey_images/',new_filename)


class USER(models.Model):
    username=models.CharField(max_length=100,blank=False,null=False)
    password=models.CharField(max_length=100,blank=False,null=False)
    phone=models.CharField(max_length=20,blank=False,null=False)
    address=models.CharField(max_length=150,blank=False,null=False)
    aadhaar=models.CharField(max_length=20,blank=False,default='XXXXXXXXXXX')
    profile=models.ImageField(upload_to=imgsave,default='x')


    def __str__(self):
        return self.username


class Category(models.Model):
    name = models.CharField(max_length=100)
    categoreylogo=models.ImageField(upload_to=categorey_image_save,default=1)
    # Add more fields as per your requirements

    def __str__(self):
        return self.name


class Product(models.Model):
    product=models.ForeignKey(USER,on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    thumbnail=models.ImageField(upload_to=product_thumbnail_save,default='no image')
    condition=models.CharField(max_length=15,blank=False,null=False,default='Choose Condition')
    # Add more fields as per your requirements

    def __str__(self):
        return self.title

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE,default=1)
    image1 = models.ImageField(upload_to=product_image_save)
    image2 = models.ImageField(upload_to=product_image_save)
    image3 = models.ImageField(upload_to=product_image_save)
    image4 = models.ImageField(upload_to=product_image_save)
    image5 = models.ImageField(upload_to=product_image_save)
    image6 = models.ImageField(upload_to=product_image_save)
    image7 = models.ImageField(upload_to=product_image_save)
    image8 = models.ImageField(upload_to=product_image_save)

    # Add more fields as per your requirements

    def __str__(self):
        return self.product.title

class Review(models.Model):
    pass


class Messages(models.Model):
    sender=models.CharField(blank=False,null=False,max_length=40)
    recevier=models.CharField(blank=False,null=False,max_length=40)
    message=models.CharField(blank=False,null=False,max_length=40)
    timeline=models.TimeField(auto_now_add=True)


class Order(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE,default=1)
    quantity = models.IntegerField()
    user = models.ForeignKey(USER, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    # Add more fields as per your requirements

    def __str__(self):
        return f"Order for {self.product.title}"


