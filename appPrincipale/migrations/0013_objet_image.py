# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-09 09:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appPrincipale', '0012_remove_objet_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='objet',
            name='image',
            field=models.ImageField(default='imagesdefaut.png', null=True, upload_to='photos/'),
        ),
    ]
