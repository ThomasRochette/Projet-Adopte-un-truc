from __future__ import unicode_literals
from django import forms
from django.db import models
from django.contrib.auth.models import User

class Categorie(models.Model):
    titre = models.CharField(max_length=20)
    description = models.TextField(null=True, max_length=200, default = "Description par defaut")
    slug = models.SlugField(max_length=100, default ='Default')

    def __str__(self):
        return self.titre

class Profil(models.Model):
    user = models.OneToOneField(User)

class Objet(models.Model):
    nom = models.CharField(max_length=40)
    categorie = models.ForeignKey('Categorie')
    proprietaire = models.ForeignKey('Profil', on_delete=models.CASCADE)
    description = models.TextField(null=True, max_length=500, default ="Pas de description")
    image=models.ImageField( null=True, upload_to="photos/", default = "imagesdefaut.png")



class Comentaire(models.Model):
    description = models.TextField(null=True, max_length=200, default = "Description par defaut")
    objet = models.ForeignKey('Objet')
