# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-15 10:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appPrincipale', '0005_auto_20170414_1548'),
    ]

    operations = [
        migrations.AlterField(
            model_name='objet',
            name='image',
            field=models.ImageField(null=True, upload_to='photos/'),
        ),
    ]
