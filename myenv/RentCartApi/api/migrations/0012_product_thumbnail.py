# Generated by Django 4.2.1 on 2023-05-25 13:43

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_product_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='thumbnail',
            field=models.ImageField(default='no image', upload_to=api.models.product_thumbnail_save),
        ),
    ]