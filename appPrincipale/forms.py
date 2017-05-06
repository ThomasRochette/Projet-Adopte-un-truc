from __future__ import unicode_literals
from django import forms
from .models import Objet, Comentaire




class ObjetForm(forms.ModelForm):
    class Meta:
        model = Objet
        fields = '__all__'

class ComentaireForm(forms.ModelForm):
    class Meta:
        model = Comentaire
        #fields = '__all__'
        exclude=('content_type','object_id','content_object')
