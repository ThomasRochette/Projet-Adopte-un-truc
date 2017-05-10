# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-08 16:12
from __future__ import unicode_literals

import appPrincipale.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('appPrincipale', '0008_auto_20170415_1012'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comentaire',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contenu', models.TextField(default='Commentaire ...', max_length=500, null=True)),
                ('object_id', models.PositiveIntegerField(default=1)),
                ('content_type', models.ForeignKey(default=appPrincipale.models.Objet, on_delete=django.db.models.deletion.CASCADE, to='contenttypes.ContentType')),
            ],
        ),
    ]