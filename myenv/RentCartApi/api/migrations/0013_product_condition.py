# Generated by Django 4.2.1 on 2023-05-25 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_product_thumbnail'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='condition',
            field=models.CharField(default='Choose Condition', max_length=15),
        ),
    ]
