# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-14 14:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appPrincipale', '0002_objet_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='objet',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images'),
        ),
    ]
