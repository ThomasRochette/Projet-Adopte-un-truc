# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-09 08:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appPrincipale', '0010_comentaire_titre'),
    ]

    operations = [
        migrations.AddField(
            model_name='objet',
            name='code_postal',
            field=models.CharField(default='69100', max_length=5),
        ),
    ]
