# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-04-13 08:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categorie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=20)),
                ('description', models.TextField(default='Description par defaut', max_length=200, null=True)),
                ('slug', models.SlugField(default='Default', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Objet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=40)),
                ('description', models.TextField(default='Pas de description', max_length=500, null=True)),
                ('categorie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appPrincipale.Categorie')),
            ],
        ),
    ]
