#from __future__ import unicode_literals


from appPrincipale.models import Categorie,Objet

from .forms import ObjetForm, ComentaireForm

from django.http import HttpResponse
from django.http import HttpResponse, Http404

from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from datetime import datetime

from django.contrib import auth
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User


# Create your views here.
#voir MonObjet et les images
def lire(request):
    monobjet = Objet.objects.all()
    return render(request, 'appPrincipale/lire.html', {'objets': monobjet})


def VOIRFormulaire(request) :

	if request.method=="GET" :
		monid=request.GET.get("return_objet","0");
		for article in Objet.objects.filter(id=monid):
			form=ObjetForm(instance=article)
			modifie=True
			objetID=article.id

	if request.method=="POST" :
		monid=request.POST.get("return_objet","0");
		nom="caca"
		if monid != "0" :
			for article in Objet.objects.filter(id=monid):
					nom=article.nom
			form=ObjetForm(request.POST, instance=article)
		else :
			form=ObjetForm(request.POST or None)

		if form.is_valid():
			form.save()
			envoie=True

	return render(request , 'appPrincipale/voirFormulaire.html', locals())

def supprimer_objet(request):
	if request.method=="POST" :
		monid=request.POST.get("return_objet","0");
		for article in Objet.objects.filter(id=monid):
			article.delete();
	return redirect(lire)

def TOUTsupprimer(request) :
	for article in Objet.objects.all():
			article.delete();
	return redirect(lire)

def formulaire_commentaire(request):
    form=ComentaireForm(request.POST or None)

    if form.is_valid() :
        form.save()
        envoie=True
        return redirect(lire)
    return render(request , 'appPrincipale/voirFormulaire_commentaire.html', locals())

def afficher_objet(request):
    monid=request.GET.get("return_objet","0");
    monobjet= Objet.objects.filter(id=monid);


    return render(request , 'appPrincipale/objet.html', {'objets': monobjet})

def profile(request):
    nom = request.user.username
    if(nom != ''):
        return render(request, 'appPrincipale/profile.html', locals())
    else:
        return redirect('/accueil/login')

def logout_view(request):

    auth.lougout(request)
    #auth.lougout(request)
    return HttpResponse("test")
