from __future__ import unicode_literals
from django import forms
from django.db import models
from django.contrib.contenttypes.models import ContentType

from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.auth.models import User

class Categorie(models.Model):
    titre = models.CharField(max_length=20)
    description = models.TextField(null=True, max_length=200, default = "Description par defaut")
    slug = models.SlugField(max_length=100, default ='Default')

    def __str__(self):
        return self.titre

class Objet(models.Model):
    categorie = models.ForeignKey('Categorie')
    nom = models.CharField(max_length=40)
    description = models.TextField(null=True, max_length=500, default ="Pas de description")
    code_postal= models.CharField(max_length=5,default="69100")
    adresse = models.CharField(max_length=150, default="100 roger salengro")
    photo=models.ImageField(upload_to="photos/", default="photos/ryan_ygf9Uff.jpg")
    user=models.ForeignKey(User, on_delete=models.CASCADE, default="1")

class Comentaire(models.Model):
    titre=models.CharField(max_length=40,default="Default")
    contenu = models.TextField(null=True, max_length=500, default ="Commentaire ...")
    content_type = models.ForeignKey(ContentType,default=Objet)
    object_id = models.PositiveIntegerField(default=1)
    content_object = GenericForeignKey('content_type', 'object_id')
    user=models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    def __str__(self):
        return "Commentaire de {0} sur {1}".format(self.contenu, self.content_object)
