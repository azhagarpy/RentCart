# Generated by Django 4.2.1 on 2023-05-29 10:52

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_product_condition'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='categoreylogo',
            field=models.ImageField(default=1, upload_to=api.models.categorey_image_save),
        ),
    ]
